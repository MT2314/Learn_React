import React, { useEffect, useState } from "react";

// ? Data
export const Bottom_Nav = ({ currentModule, challenge, page, executeScroll }) => {
	const [prev, setPrev] = useState(null);
	const [next, setNext] = useState(null);
	const [orgUnitId, setOrgUnitId] = useState(null);

	console.log("Inside Bottom_Nav");
	useEffect(() => {
		const getLinks = async () => {
			const _orgUnitId = window.location.href.replace(/.+content\/enforced\/(\d+)-.*/gi, "$1");
			console.log(_orgUnitId);

			const modules = (await (await fetch(`/d2l/api/le/1.22/${_orgUnitId}/content/toc`)).json())
				.Modules;

			console.log("Modules ", modules);

			const mainModule =
				modules[modules.findIndex((obj) => obj.Title.includes(currentModule))].Modules;
			console.log("Main Module ", mainModule);
			const subModules =
				mainModule[mainModule.findIndex((obj) => obj.Title.includes(challenge))];
			console.log("Sub Modules ", subModules);
			const currentLessonIndex = subModules.Topics.findIndex((obj) => obj.Title.includes(page));

			console.log("Current Lesson Index: " + currentLessonIndex);

			setOrgUnitId(_orgUnitId);
			setPrev(subModules.Topics[currentLessonIndex - 1]);
			setNext(subModules.Topics[currentLessonIndex + 1]);
		};
		getLinks();
	}, []);

	return (
		<footer className="Bottom_Nav">
			<div className="Next-Prev">
				{prev && (
					<a
						href={`/d2l/le/lessons/${orgUnitId}/topics/${prev ? prev.TopicId : ""}`}
						target="_top"
						style={{ textDecoration: "none" }}
					>
						<button className="prev-page">
							<span className="desktop">
								{`Retourner à la page précédente`.toUpperCase()}
							</span>
							<span className="tablet">{`page précédente`.toUpperCase()}</span>
						</button>
					</a>
				)}
				{next && (
					<a
						href={`/d2l/le/lessons/${orgUnitId}/topics/${next ? next.TopicId : ""}`}
						target="_top"
						style={{ textDecoration: "none" }}
					>
						<button className="next-page">
							<span className="desktop">{`Aller à la PAGE SUIvante`.toUpperCase()}</span>
							<span className="tablet">{`Page suivante`.toUpperCase()}</span>
						</button>
					</a>
				)}
			</div>
			<button
				className="up-page"
				onClick={() => {
					executeScroll();
				}}
			></button>
		</footer>
	);
};
