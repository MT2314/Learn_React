import React, {useState, useEffect} from 'react'

export const TabItem = props => <div {...props} />;
export const Tab = ({ onTabClick, children, type }) => {
  const [bindIndex, setBindIndex] = React.useState(0);
  const changeTab = newIndex => {
    if (typeof onTabClick === 'function') onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = children.filter(item => item.type.name === 'TabItem');
  
  //Use media query depends on the reponsive mode + content size + timeline
  const mediaMatch = window.matchMedia('(min-width: 500px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);
  
    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    }, );
    return matches;
  };
  const tablet = useMediaQuery('(max-width: 1000px)');
  const mobile = useMediaQuery('(max-width: 740px)');
  const [columnStyle, setColumnStyle] = useState();
  const titleLength = items.map(({props}) => (props.title.length));

  useEffect(() => {
    if (type == "timeline" && titleLength.some(v => v > 10) && tablet && mobile) {
      setColumnStyle("repeat(2, 1fr)")
    }
    else if (type == "timeline" && titleLength.some(v => v > 10) && tablet && !mobile) {
      setColumnStyle("repeat(3, 1fr)")
    }
  },[tablet, mobile, columnStyle])
  // End of media query


  // * using left and right OR up and down Arrow key to navigate through tab buttons
  const ref = React.useRef([]);

  const handleKeyPress = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();

      const last = items.length;
      const next = ref.current[bindIndex - 1];

      if (!next) {
        ref.current[items.length - 1].focus();
        changeTab(items.length - 1)
      }
      else if (next){
        next.focus();
        changeTab(bindIndex - 1);
      }
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();

      const first = 0;
      const next = ref.current[bindIndex + 1];

      if (!next) {
        ref.current[0].focus();
        changeTab(0)
      }
      else if (next){
        next.focus();
        changeTab(bindIndex + 1);
      }
    }
  };
  // End of Navigation by Arrow keys

  return (
    <div className={`${type ? `${type}-` : ""}tab-container`}>
      <div className="tab-menu" role="tablist" style={{gridTemplateColumns: columnStyle}}  onKeyDown={handleKeyPress}>
        {items.map(({ props }, i ) => {
          return(
            <button
              key={`tab-btn-${i}`}
              onClick={() => changeTab(i)}
              className={`tab-btn ${bindIndex === i ? 'selected' : ''}`}
              type="button"
              role="tab"
              aria-selected={bindIndex === i ? "true" : "false"}
              // id={`tab-${i}`}
              // aria-controls={`tab-content-panel-${i}`}
              tabIndex={bindIndex === i ? 0 : -1}
              ref={(item) => ref.current[i] = item}
            >
              {props.title}
            </button>
          )
          })}
      </div>
      <div className={`tab-view`}>
        {items.map(({ props }, i) => {
          const contentWithImg = props.img ? 'with-image' : '';
        return(
          <div className="tab-content" style={bindIndex === i ? null : {visibility: "hidden"}}>
            <div
              key={`tab-content-${i}`}
              className={`tab-pane ${
                bindIndex === i ? `selected ${contentWithImg}` : ''
              }`}
              // id={`tab-content-panel-${i}`}
              role="tabpanel"
              // aria-labelledby={`tab-${i}`}
              aria-hidden={bindIndex === i ? "false" : "true"}
            > 
              <div>
                { 
                  props.text 
                  ?
                  typeof props.text == "string" 
                    ? 
                    <p>{props.text}</p> 
                    : 
                    props.text.map((v, i) => {
                      return <p>{v}</p>;
                  })
                  :
                  null
                }
              {
                props.list 
                ? 
                <ul>
                  {typeof props.list == "string" ? <li>{props.list}</li> : 
                  props.list.map((v,i)=>{
                    return (
                    <li>{v}</li>
                    )
                  })}
                </ul>
                :
                null
              }
              </div>
              {props.img ? props.img.map((v,i) => (
                <img src={v.src} alt={v.alt} className="img-responsive"/>
              )) : null}
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

