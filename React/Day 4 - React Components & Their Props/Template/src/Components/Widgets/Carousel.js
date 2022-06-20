import React, {Fragment} from "react";
import {GoPrimitiveDot} from "react-icons/go";
export const CarouselItem = ({
  index,
  type,
  heading,
  subheading,
  text,
  img,
  activeClass,
  animatedClass,
  totalLength,
}) => {
  return (
    <Fragment>
      {type == "text" ? (
        <div
          className={`carousel-item${activeClass} ${img ? "with-image" : ""}
            ${activeClass ? "" : `${animatedClass} visible-hidden`}`}
          key={`carousel-item-${index}`}
          // role="group"
          // aria-label={`${index + 1} of ${totalLength} Carousel Content`}
          aria-hidden={activeClass ? "false" : "true"}
        >
          <div className="carousel-text">
            <h3>{heading}</h3>
            <p className="subheading">{subheading}</p>
            {typeof text == "string" ? (
              <p>{text}</p>
            ) : (
              text.map((v, i) => {
                return <p>{v}</p>;
              })
            )}
          </div>
          {/* <div className="carousel-img"> */}
          {img
            ? img.map((v, i) => {
                return (
                  <img
                    src={v.src}
                    alt={v.alt}
                    className="img-responsive"
                    key={i}
                  />
                );
              })
            : null}
          {/* </div> */}
        </div>
      ) : (
        <div
          className={`carousel-item${activeClass}${
            activeClass ? "" : `${animatedClass} visible-hidden`
          }`}
          key={`carousel-item-${index}`}
          aria-hidden={activeClass ? "false" : "true"}
          // aria-label={`${index + 1} of ${totalLength} Photo Carousel Content`}
        >
          <div className="carousel-img">
            {img.map((v, i) => {
              return (
                <img
                  src={v.src}
                  alt={v.alt}
                  className="img-responsive"
                  key={i}
                />
              );
            })}
          </div>
          <div className="carousel-text">
            <p>{text}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export const Carousel = ({type, children}) => {
  const items = children.filter((item) => item.type.name === "CarouselItem");

  const [active, setActive] = React.useState({
    index: 0,
    direction: null,
    carouselItemCount: items.length,
  });

  const toggleCarousel = (direction) => {
    let index = active.index;
    const [min, max] = [0, active.carouselItemCount - 1];

    if (direction === "next") {
      index++;
    } else if (direction === "prev") {
      index--;
    }

    if (index > max) {
      index = 0;
    }

    if (index < min) {
      index = max;
    }

    setActive({...active, direction, index});
    announceCarousel(index);
  };

  function announceCarousel(index) {
    var announcement = document.querySelector(".carousel-announcement");
    announcement.textContent =
      "Photo carousel item " + (index + 1) + " of " + active.carouselItemCount;
    announcement.setAttribute("role", "status");
    setTimeout(() => {
      announcement.setAttribute("role", "");
    }, 200);
  }

  const ref = React.useRef([]);
  ref;

  const handleKeyPress = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();

      const last = items.length;
      const next = ref.current[active.index - 1];
      if (!next) {
        ref.current[items.length - 1].focus();
        toggleCarousel("prev");
      } else if (next) {
        next.focus();
        setActive({...active, index: active.index - 1});
        annouceContent(active.index - 1);
      }
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();

      const first = 0;
      const next = ref.current[active.index + 1];
      next;
      if (!next) {
        ref.current[0].focus();
        toggleCarousel("next");
      } else if (next) {
        next.focus();
        setActive({...active, index: active.index + 1});
        annouceContent(active.index + 1);
      }
    }
  };

  //Prev/Next btn announcement
  function announceCarousel(index) {
    var announcement = document.querySelector(`.${type}-carousel-announcement`);
    announcement.textContent = `${type} carousel item ${index + 1} of ${
      active.carouselItemCount
    }`;
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
  }

  //Thumbnail nav btn announcement
  function annouceContent(index) {
    var textAnnouncement = document.querySelector(
      `.text-carousel-announcement`
    );
    var photoAnnouncement = document.querySelector(
      `.photo-carousel-announcement`
    );
    var content = items[index].props;

    if (type === "text") {
      const text =
        typeof content.text === "string"
          ? content.text
          : content.text.map((v, i) => v);
      const imgAlt = content.img ? content.img[0].alt : null;
      textAnnouncement.textContent = `Text carousel item ${index + 1} of ${
        active.carouselItemCount
      }: ${content.heading}. ${content.subheading}. ${text} ${imgAlt}`;
      textAnnouncement.setAttribute("aria-live", "polite");
      textAnnouncement.setAttribute("aria-atomic", "true");
    } else if (type === "photo") {
      photoAnnouncement.textContent = `Photo carousel item ${index + 1} of ${
        active.carouselItemCount
      }: ${content.img[0].alt} ${content.text}`;
      photoAnnouncement.setAttribute("aria-live", "polite");
      photoAnnouncement.setAttribute("aria-atomic", "true");
    }
  }

  const [onFocus, setOnFocus] = React.useState("");
  React.useEffect(() => {
    if (onFocus === `carousel-nav-btn active ${active.index}`) {
      annouceContent(active.index);
    }
  });
  const CarouselItemLocation = items.map(({props}, i) => {
    const activeClass = active.index === i ? " visible" : "";
    const animatedClass = i < active.index + 1 ? " prev" : " next";
    return (
      <CarouselItem
        type={type}
        heading={props.heading}
        subheading={props.subheading}
        text={props.text}
        img={props.img}
        activeClass={activeClass}
        animatedClass={animatedClass}
        index={i}
        totalLength={items.length}
      />
    );
  });
  return (
    <div className="carousel-container" style={type === "text" ? {padding: "12px"} : {padding: "0"}}>
      <div
        className={`${type}-carousel`}
        onKeyDown={type === "text" ? handleKeyPress : null}
      >
        {type === "photo" ? CarouselItemLocation : null}
        <div className={`${type}-carousel-announcement sr-only`}></div>
        <div className="carousel-nav" onKeyDown={handleKeyPress} role="tablist">
          {items.map(({props}, i) => {
            const activeClass = active.index === i ? " active" : "";
            return (
              <>
                {type == "text" ? (
                  <>
                    <button
                      data-slide={i}
                      key={`text-carousel-nav-${i}`}
                      className={`carousel-nav-btn${activeClass} ${i}`}
                      onClick={() => setActive({...active, index: i})}
                      tabIndex={-1}
                      type="button"
                      role="tab"
                      aria-selected={activeClass ? "true" : "false"}
                      ref={(item) => (ref.current[i] = item)}
                      onFocus={(e) => setOnFocus(e.target.className)}
                      aria-label={`Navigation button ${i + 1} of ${items.length}`}
                    >
                      <span>{`${i + 1}`}</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      data-slide={i}
                      key={`photo-carousel-nav-${i}`}
                      className={`carousel-nav-btn${activeClass} ${i}`}
                      onClick={() => setActive({...active, index: i})}
                      tabIndex={activeClass ? 0 : -1}
                      ref={(item) => (ref.current[i] = item)}
                      style={{
                        backgroundImage:
                          "url(" + `${props.img.map((v, i) => v.src)}` + ")",
                      }}
                      aria-label={`Navigation button ${i + 1} of ${items.length}`}
                    ></button>
                  </>
                )}
              </>
            );
          })}
        </div>
        <button className="prev-btn" onClick={() => toggleCarousel("prev")}>
          <img src="assets/icons/arrow_left_desktop.svg" alt="Previous Item" />
        </button>
        <button className="next-btn" onClick={() => toggleCarousel("next")}>
          <img src="assets/icons/arrow_right_desktop.svg" alt="Next Item" />
        </button>
        {type === "text" ? CarouselItemLocation : null}
      </div>
    </div>
  );
};
