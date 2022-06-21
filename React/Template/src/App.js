import React from "react";
import SideNav from "./Components/SideNav";

import Page1 from "./pages/Day4";
import Page2 from "./pages/Widgets";
import Page3 from "./pages/Introduction";

const componentMapping = {
  Page1,
  Page2,
  Page3,
};

const App = () => {
  const D2L = document.getElementById("d2l");
  const PAGE = D2L.getAttribute("data-page");

  const Component =
    componentMapping[
      `${(PAGE[0].toUpperCase() + PAGE.slice(1)).replace(" ", "")}`
    ];

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
