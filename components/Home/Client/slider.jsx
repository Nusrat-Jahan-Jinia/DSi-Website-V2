import { useEffect } from "react";
import Swiper from "swiper";
import { useCurrentWidth } from "react-socks";

// maxItemPerSLide - Maz number of items to show per slide
const Slider = (props) => {
  console.log(props.slides);
  let maxItemPerSLide = +props.maxItemPerSLide; // Responsive mod
  if (useCurrentWidth() < 640) {
    maxItemPerSLide = 1;
  } else if (useCurrentWidth() < 1024) {
    maxItemPerSLide = 3;
  }

  let slides;
  if (props.slides === null) {
    return <></>;
  }
  // const slideItems = props.slides.map((slide) => {
  //   return <div className="swiper-slide">{slide}</div>;
  // });
  const sliceSlide = (itemArray, chunkSize) => {
    var allChunks = [];
    var i,
      j,
      temparray,
      chunk = chunkSize;
    for (i = 0, j = itemArray.length; i < j; i += chunk) {
      temparray = itemArray.slice(i, i + chunk);
      allChunks.push([temparray]);
    }
    allChunks = allChunks.map((slide) => {
      return (
        <div className="swiper-slide flex flex-row justify-center">{slide}</div>
      );
    });
    return allChunks;
  };

  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  slides = sliceSlide(props.slides, maxItemPerSLide);
  useEffect(() => {
    swiper.init();
    swiper.update();
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">{slides}</div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar hidden"></div>
    </div>
  );
};

export default Slider;
