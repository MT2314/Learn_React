import React, { useState } from "react";
import "../assets/styles/_SideNav.scss";
const SideNav = ({ mapping, page }) => {
	return (
		<>
			<input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />

			<label for="openSidebarMenu" class="sidebarIconToggle">
				<div class="spinner diagonal part-1"></div>
				<div class="spinner horizontal"></div>
				<div class="spinner diagonal part-2"></div>
			</label>

			<div id="sidebarMenu">
				<ul class="sidebarMenuInner">
					{Object.keys(mapping).map((key) => {
						return (
							<li className={`${page === key ? "active" : ""}`}>
								<a href={`http://localhost:3000/${key}.html`}>{key}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default SideNav;
