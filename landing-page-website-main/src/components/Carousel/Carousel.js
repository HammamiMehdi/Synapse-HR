import React from "react";
import styled from "styled-components";
import Image from "../../assets/img/Image.png";
import TopButton from "./TopButton";

const Carousel = () => {




  return (
    <CarouselWrapper>
      <HeroHeader
        className="container-xxl hero-header mb-1 carousel-wrapper"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 display-3 animated slideInLeft text-left text-lg-start">
              <div
                className="wow display-3 animated slideInLeft"
                data-wow-delay="0.1s"
              >
                <SectionTitle
                  className="section-title"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#174E71",
                    fontWeight: 900,
                    lineHeight: 1.5,
                  }}
                >
                  Connectez<small style={{ fontWeight: "normal" }}>,</small> engagez
                  <small style={{ fontWeight: "normal" }}> et </small>développez
                  <small style={{ fontWeight: "normal" }}>
                    {" "}
                    votre personnel d'une manière simple et moderne.
                  </small>
                  <TopButton />
                </SectionTitle>

              </div>
              <br />
              <br />
              <br />
            </div>
            <div id="container-image" className="col-lg-7 text-center display-3 text-lg-end overflow-hidden" style={{ marginTop: -30 }}>
              <img className="img-fluid" src={Image} alt="" />
            </div>
          </div>
        </div>
      </HeroHeader>
    </CarouselWrapper>
  );
};

export default Carousel;

// styled components

const HeroHeader = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;

  #container-image{
    filter: saturate(159%);
  }
`;

const CarouselWrapper = styled.div` 
  max-width: 100%;
  height: 100vh;
  overflow: hidden;

  @media only screen and (max-width: 992px) {
    height: 150vh;
  }

  @media only screen and (max-width: 768px) {
    height: 180vh;
  }

  @media only screen and (max-width: 600px) {
    height: 150vh;
  }

`;

const SectionTitle = styled.h1`
  color: #135ddf;
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    width: 45px;
    height: 2px;
    top: 50%;
    left: -55px;
    margin-top: -10px;
    background: var(--primary);

    @media only screen and (max-width: 992px) {
      left: 0;
    }
  }

  &::after {
    content: "";
    width: 45px;
    height: 2px;
    top: 50%;
    right: -55px;
    margin-top: -1px;
    background: var(--primary);
  }

  &.text-start::before,
  &.text-end::after {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
