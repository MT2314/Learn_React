import React from "react";
import SideNav from "./Components/SideNav";

import Day4 from "./pages/Day4.js";
import Introduction from "./pages/Introduction.js";
import Widgets from "./pages/Widgets.js";

const componentMapping = {
   Day4,
   Introduction,
   Widgets,
};

const App = () => {
	const D2L = document.getElementById("d2l");
	const PAGE = D2L.getAttribute("data-page");

	const Component =
		componentMapping[`${(PAGE[0].toUpperCase() + PAGE.slice(1)).replace(" ", "")}`];

	return (
		<>
			<SideNav mapping={componentMapping} page={PAGE} />
			<div className="Course">
				<Component />
			</div>
		</>
	);
};

export default App;
