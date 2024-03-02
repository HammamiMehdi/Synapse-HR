import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketSimple, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SliderCard = ({ options }) => {
  const formatDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  // color bg
  const bgColor = (value) => {
    if (value === "Terminé") {
      return <p className="btn bg-danger">{value}</p>;
    } else if (value === "Reporté") {
      return <p className="btn bg-secondary">{value}</p>;
    } else {
      return <p className="btn bg-success">{value}</p>;
    }
  };

  const comparerStatut = (a, b) => {
    var statutA = a.statut_event.toUpperCase();
    var statutB = b.statut_event.toUpperCase();

    if (statutA < statutB) {
      return 1;
    }

    if (statutA > statutB) {
      return -1;
    }

    return 0;
  };

  return (
    <Container>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {options.sort(comparerStatut).map((option, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={`data:image/jpg;base64,${option.background}`}
                alt={option.main}
              />
              <Head>
                <h3 className="text-truncate">{option.main}</h3>
                {bgColor(option.statut_event)}
              </Head>
              <Body>
                <p className="text-truncate">
                  <span>Description</span> : {option.sub}
                </p>
                <div>
                  <p className="location-event">
                    <FontAwesomeIcon className="me-2" icon={faTicketSimple} />
                    {option.type_event}
                  </p>
                  <p className="date-event">
                    <FontAwesomeIcon icon={faCalendar} />{" "}
                    {new Date(option.date_event).toLocaleDateString(
                      "fr-FR",
                      formatDate
                    )}
                  </p>
                </div>
              </Body>
              <Footer>
                <Link
                  to={option.lien_event}
                  className="bg-primary p-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir l'évènement
                </Link>
              </Footer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SliderCard;

// Styles for slider card

const Container = styled.div`
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 400px;
    * {
      background-image: none;
    }
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: all 0.3s ease-out !important;

    &:hover {
      transform: translateY(-5px) scale(1.005) !important;
    }

    @media screen and (max-width: 500px) {
      width: 80%;
      height: auto;
    }
  }

  .swiper-slide img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 60%;
    border-radius: 10px 10px 0 0;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    color: #135ddf;
    font-size: 20px;
    margin: 10px;
    flex: 1;
  }
  p.btn {
    color: white;

    &:hover {
      color: white;
    }
  }
`;

const Body = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  p {
    span {
      color: #135ddf;
      font-weight: bold;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Footer = styled.div`
  a {
    color: white;
    border-radius: 5px;
    font-size: 12px;
    transition: 0.3s;
    margin-left: 10px;
    &:hover {
      color: ;
      background-color: #135ddf !important;
    }
  }
`;
