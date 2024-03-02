import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-cube';
import { EffectCube, Autoplay } from "swiper";

import "./EventCaroussel.css";

import slide1 from "../../assets/img/events/event1.webp";
import slide2 from "../../assets/img/events/event2.webp";
import slide3 from "../../assets/img/events/event3.webp";
import slide4 from "../../assets/img/events/event4.webp";
import slide5 from "../../assets/img/events/event5.webp";
import slide6 from "../../assets/img/events/event6.webp";
import slide7 from "../../assets/img/events/event7.webp";

const EventCarousel = () => {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  const handleRedirect = () => {
    // go to #events
    window.location.href = "#events";
  }

  return (
    <>
      <div className="sectionBack" onClick={handleRedirect}>
        <div id="contentContainer">
          <section id="carouselContainer">
            <Swiper
              spaceBetween={30}
              effect={"cube"}
              loop={true}
              speed={2000}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[EffectCube, Autoplay]}
              className="mySwiper"
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={image} alt="item" className="carouselItem" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </div>
      </div>
    </>
  );
};

export default EventCarousel;
