import React, {Fragment} from "react";
import {FiPlus, FiMinus} from "react-icons/Fi";
import {useEffect} from "react/cjs/react.production.min";

export const AccordionItem = ({
  title,
  isCollapsed,
  handleClick,
  text,
  index,
  refstate,
  img,
}) => {
  const keypressListener = (e) => {
    // window.addEventListener('keypress', function(e) {
    //   if (e.code == "Enter" || e.code == "Space"){
    //     (e.code)
    //   }
    // })
    // if (refstate.current[index]) {
    //   refstate.current[index].focus();
    //   var alertElement = document.querySelector(`#accordion-content${index}`);
    //   alertElement.setAttribute("role", "status");
    //   setTimeout(()=> {
    //     alertElement.removeAttribute("role", "status");
    //   }, 200)
    // }
  };

  const expandedClass = isCollapsed ? "" : "expanded";
  const imgSize = img ? img.map((v, i) => v.size) : "";

  return (
    <div className={`each-accordion ${expandedClass}`}>
      <button
        className={`accordion-button ${expandedClass}`}
        role="tab"
        onClick={handleClick}
        onKeyPress={(e) => keypressListener(e)}
        aria-expanded={isCollapsed ? "false" : "true"}
        ref={(item) => (refstate.current[index] = item)}
      >
        {isCollapsed ? (
          <span className="minus-icon rotate" />
        ) : (
          <span className="minus-icon" />
        )}
        <span className="overlap" />
        <span className="title">{title}</span>
      </button>
      <div
        className={`accordion-item ${expandedClass} 
        ${isCollapsed ? "visible-hidden" : ""} ${imgSize}`}
        aria-hidden={isCollapsed ? "true" : "false"}
        id={`accordion-content${index}`}
      >
        <div>
          {typeof text == "string" ? (
            <p>{text}</p>
          ) : (
            text.map((v, i) => {
              return <p>{v}</p>;
            })
          )}
        </div>
        {img
          ? img.map((v, i) => (
              <img
                src={v.src}
                alt={v.alt}
                className={`img-responsive ${v.size}`}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export const Accordion = ({children}) => {
  const [bindIndex, setBindIndex] = React.useState();
  const ref = React.useRef([]);

  const changeItem = (itemIndex) => {
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
    if (itemIndex == bindIndex) setBindIndex();
  };

  //* Function for scrolling the accordion into center view like the ones work in secondary accordion *//
  //* One of the issue came in for QA accessibility, will keep the function and remove if it's not necessary
  const refBtn = ref.current[bindIndex];
  ref.current;
  React.useEffect(() => {
    if (refBtn) {
      refBtn.scrollIntoView({behavior: "smooth"});
    }
  }, [refBtn]);

  const items = children.filter((item) => item.type.name === "AccordionItem");
  return (
    <div className="accordions">
      <div role="tablist">
        {items.map(({props}, i) => (
          <AccordionItem
            key={i}
            isCollapsed={bindIndex !== i}
            title={props.title}
            handleClick={() => changeItem(i)}
            text={props.text}
            img={props.img}
            index={i}
            refstate={ref}
          />
        ))}
      </div>
    </div>
  );
};
