import React, {useState, useEffect, useRef} from "react";

// ? Section - Working Section
export const Section = ({children, type, block, collapse, columns}) => {
  return (
    <div
      className={`${block ? "Block" : "Section"} ${type ? type : ""} ${
        collapse ? collapse : ""
      }`}
    >
      {children}
    </div>
  );
};
// ? Block - Full Width
export const Block = ({children, type, collapse}) => {
  return (
    <Section
      children={children}
      block={true}
      type={`${type ? type : ""}`}
      collapse={collapse}
    ></Section>
  );
};
// ? Banner Block
export const Banner = ({heading, subheading, image, text, type}) => {
  return (
    <div
      className={`Page-Banner ${image ? "with_img" : ""} ${type ? type : ""}`}
    >
      <div className={`Title-Banner`}>
        <h1>{heading}</h1>
        {subheading && <h2>{subheading}</h2>}
        {text && <p>{text}</p>}
      </div>
      {image && (
        <div className={`${image ? "img" : ""}`}>
          <img alt="" src={image} />
        </div>
      )}
    </div>
  );
};
// ? Text Block
export const Text = ({text, list, type}) => {
  return typeof text == "string" ? (
    <div className={`Text`}>
      <p className={type ? type : ""}>{`${text}`}</p>
      {list && (
        <ul className="List">
          {typeof list == "string" || list.length > 1 ? (
            <li>{list}</li>
          ) : (
            list.map((v, i) => {
              return <li>{v}</li>;
            })
          )}
        </ul>
      )}
    </div>
  ) : (
    <div className={`Text`}>
      {text.map((sentence, i) => {
        return <p className={type ? type : ""}>{`${sentence}`}</p>;
      })}
      {list && (
        <ul className="List">
          {typeof list == "string" || list.length > 1 ? (
            <li>{list}</li>
          ) : (
            list.map((v, i) => {
              return <li>{v}</li>;
            })
          )}
        </ul>
      )}
    </div>
  );
};

// ? BlockQuote Block
export const Blockquote = ({type, color, text}) => {
  // ? If type is set to Small / Purple blockquote

  switch (type) {
    case "small":
      return typeof text == "string" ? (
        <div className="Blockquote Small">
          <div className={`Small-Inside`}>
            <span>{`${text}`}</span>
          </div>
        </div>
      ) : (
        <div className={`Blockquote Small`}>
          <div className={`Small-Inside`}>
            {text.map((v, i) => {
              return <span>{`${v}`}</span>;
            })}
          </div>
        </div>
      );
    // ? Default Large / Blue blockquote
    default:
      return typeof text == "string" ? (
        <div className={`Blockquote`}>
          <h1>{`${text}`}</h1>
        </div>
      ) : (
        <div className={`Blockquote`}>
          {text.map((v, i) => {
            return <h1>{`${v}`}</h1>;
          })}
        </div>
      );
  }
};

// ? Image Block
export const Image = ({img, alt, position, children}) => {
  const myClass = () => {
    if (position === "left") {
      return "img-left";
    } else if (position === "right") {
      return "img-right";
    }
  };

  if (children) {
    return (
      <div className={`Image`}>
        <div className="img-top">
          <img className={`${myClass()}`} src={img} alt={alt} />
        </div>
        <div className={`text-img`}>{children}</div>
        <div className="img-bot">
          <img className={`img-center`} src={img} alt={alt} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`Image img-only`}>
        <img className={`img-center`} src={img} alt={alt} />
      </div>
    );
  }
};

// ? Question / Answer

// * Banner
export const WidgetBanner = ({current, widgetRef, order}) => {
  return (
    <div className={`Dynamic-Banner ${current[0]}`} ref={widgetRef}>
      <div className="Dynamic-Pill">
        <div>
          <div className={`icon ${current[0]}`}></div>
          <span>{`${current[0] == "Q" ? "Question" : "Découverte"} ${
            order.length > 1 ? current[1] : ""
          }`}</span>
        </div>
      </div>
    </div>
  );
};

// * ILO Container
export const DynamicBlock = ({children, order}) => {
  const [currentType, setCurrentType] = useState(0);
  const [totalQ, setTotalQ] = useState();
  const [totalD, setTotalD] = useState();
  const widgetRef = useRef(null);
  const widgetScroll = () => widgetRef.current.scrollIntoView();
  useEffect(() => {
    let q = 0;
    let d = 0;
    if (order) {
      order.map((item) => {
        item[0] == "Q" ? q++ : d++;
      });
    }
    setTotalQ(q);
    setTotalD(d);
  }, [order]);

  return (
    <div className={`Dynamic-Block ${order[currentType][0]}`}>
      <WidgetBanner
        current={order[currentType]}
        widgetRef={widgetRef}
        order={order}
      />
      <div className="Dynamic-Flow" key={currentType}>
        {children.length ? children[currentType] : children}
      </div>
      {order.length > 1 && (
        <WidgetNav
          executeScroll={widgetScroll}
          current={order[currentType]}
          setCurrentType={setCurrentType}
          currentType={currentType}
          totalQ={totalQ}
          totalD={totalD}
        />
      )}
    </div>
  );
};

// * Widget Nav
export const WidgetNav = ({
  current,
  executeScroll,
  setCurrentType,
  currentType,
  totalQ,
  totalD,
}) => {
  console.log(currentType, totalQ, totalD);
  return (
    <div className={`Dynamic-Nav ${current[0]}`}>
      <div className={`prev-page ${current[0]}`}>
        <button
          onClick={() => {
            currentType >= 0 && setCurrentType(currentType - 1);
          }}
          disabled={currentType < 1 ? "true" : ""}
        >
          <span>{"Précédent".toUpperCase()}</span>
        </button>
      </div>
      <div className="Current-Dynamic">
        <span>{`${currentType + 1} sur ${totalQ + totalD}`}</span>
      </div>
      <div className={`next-page ${current[0]}`}>
        <button
          onClick={() => {
            if (currentType <= totalQ + totalD - 1) {
              setCurrentType(currentType + 1);
              executeScroll();
            }
          }}
          disabled={currentType >= +totalQ + totalD - 1 ? "true" : ""}
        >
          <span>{"Suivant".toUpperCase()}</span>
        </button>
      </div>
    </div>
  );
};

// ? Icon
export const Icons = ({text, type}) => {
  return (
    <div className={`Icons ${type ? type : ""}`}>
      <span>{text}</span>
    </div>
  );
};

// ? List
export const List = ({list, type, indent}) => {
  if (!type) {
    type = "large";
  }

  if (type === "alphabetic")
    return (
      <ol
        type="a"
        className={`List ${type ? type : ""} ${indent ? "Indent" : ""}`}
      >
        {typeof list == "string" || list.length == 1 ? (
          <li>
            <span>{list}</span>
          </li>
        ) : (
          list.map((v, i) => {
            return (
              <li>
                <span>{v}</span>
              </li>
            );
          })
        )}
      </ol>
    );
  else if (type === "numeric")
    return (
      <ol
        start="1"
        className={`List ${type ? type : ""} ${indent ? "Indent" : ""}`}
      >
        {typeof list == "string" || list.length == 1 ? (
          <li>
            <span>{list}</span>
          </li>
        ) : (
          list.map((v, i) => {
            return (
              <li>
                <span>{v}</span>
              </li>
            );
          })
        )}
      </ol>
    );
  else
    return (
      <ul className={`List ${type ? type : ""} ${indent ? "Indent" : ""}`}>
        {typeof list == "string" || list.length == 1 ? (
          <li>
            <span>{list}</span>
          </li>
        ) : (
          list.map((v, i) => {
            return (
              <li>
                <span>{v}</span>
              </li>
            );
          })
        )}
      </ul>
    );
};
// ? List
export const Table = ({list, type}) => {
  return (
    <ul className={`List ${type ? type : ""}`}>
      {typeof list == "string" || list.length == 1 ? (
        <li>{list}</li>
      ) : (
        list.map((v, i) => {
          return <li>{v}</li>;
        })
      )}
    </ul>
  );
};
// ? Buttons

export const Button = ({type, link, text, heading, size}) => {
  if (type === "link") {
    return (
      <div className={`Button ${size ? size : "medium"}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>{text.toUpperCase()}</span>
        </a>
      </div>
    );
  }
  if (type === "microsoft") {
    return (
      <div className={`Button large`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>{`Obtenir en format Microsoft`.toUpperCase()}</span>
        </a>
      </div>
    );
  }
  if (type === "google") {
    return (
      <div className={`Button large`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>{`Obtenir en format Google`.toUpperCase()}</span>
        </a>
      </div>
    );
  }
  if (type === "undefined") {
    return (
      <form action={link} target="_blank">
        <input
          type="submit"
          value={text.toUpperCase()}
          style={{paddingLeft: "60px"}}
        />
      </form>
    );
  }
};

// ? Thematic vocabulary
export const Thematic_Vocabulary = ({title, text, list}) => {
  return (
    <div className="Thematic_Vocabulary">
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        {list.map((item) => (
          <span className="item">{item}</span>
        ))}
      </div>
    </div>
  );
};
// ? Learning Goals
export const LearningGoals = ({goals}) => {
  return (
    <div className="learning_goals">
      <h3>Learning Goals for This Challenge</h3>
      <div className="learning_goals_box">
        <ul>
          {typeof goals == "string" ? (
            <li>{goals}</li>
          ) : (
            goals.map((v, i) => {
              return <li>{v}</li>;
            })
          )}
        </ul>
      </div>
    </div>
  );
};

// ? Learning Skills & Habits
export const LearningSkillsHabits = ({skills, habits}) => {
  return (
    <div className="learning_skills">
      <h3>Learning Skills and Work Habits for This Challenge</h3>
      <div className="learning_goals_box">
        {typeof skills == "string" ? (
          <spa>
            {skills}
            {typeof habits == "string" ? (
              <span>{habits}</span>
            ) : (
              habits.map((v, i) => {
                return <span>{v}</span>;
              })
            )}
            )
          </spa>
        ) : (
          skills.map((v, i) => {
            return (
              <p>
                {v}
                <div className="habits">
                  {typeof habits == "string" ? (
                    <span>{habits}</span>
                  ) : (
                    habits.map((v, i) => {
                      return <span>{v}</span>;
                    })
                  )}
                </div>
              </p>
            );
          })
        )}
      </div>
    </div>
  );
};

// ? Discussion Forum
export const Discussion_Forum = ({heading, linkText, link}) => {
  return (
    <div className="Discussion_Forum">
      <div className="icon">
        <img src="/assets/icons/discussion.svg" alt="Discussion Icon" />
      </div>
      <div class="container">
        <h4>{heading}</h4>
        <a href={link} target="_blank">
          {linkText}
        </a>
      </div>
    </div>
  );
};
// ? Discussion Forum
export const Submit_Work = ({heading, subheading}) => {
  return (
    <div className="Submit_Work">
      <div className="icon">
        <img src="/assets/icons/submit.svg" alt="Submit Icon" />
      </div>
      <div className="container">
        <h4>{heading}</h4>
        <span>{subheading}</span>
      </div>
    </div>
  );
};
// ? Discussion Forum
export const Remember = ({heading, subheading}) => {
  return (
    <div className="Remember">
      <img src="/assets/icons/remember.svg" alt="Submit Icon" />
    </div>
  );
};
