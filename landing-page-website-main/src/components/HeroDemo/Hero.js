import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../../lib/bootstrap/css/bootstrap.min.css";
import "../../assets/css/style.css";
import styled from "styled-components";

const Hero = () => {
  const stopVideo = () => {
    var videos = document.querySelectorAll("iframe, video");
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === "video") {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    });
  };

  return (
    <Container>
      <div
        className="container"
        id="solutions"
      >
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1
            id="events"
          >
            Jetez un coup d'œil sur{" "}
            <span style={{ fontWeight: "bold" }}>Notre Démo</span>
          </h1>
          <div className="md-5 container-video">
            <div className="video">
              <button
                type="button"
                className="btn-play"
                data-toggle="modal"
                data-target="#videoModal"
              >
                <span> </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Synapse-HR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={stopVideo}
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/W31Fd9gA26o"
                  id="video"
                  allowFullScreen
                  allowscriptaccess="always"
                  title="YouTube video player"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;

// styled components

const Container = styled.div`
  #videoModal {
    width: 100%;
    .modal-content {
      width: 100%;
      margin: auto;
    }
  }

  #solutions{
    margin-bottom: -185px;
    margin-top: 200px;
    .container-video{
      .video{
        @media screen and (max-width:500px) {
          min-height:300px !important;
        }
      }
    }
  }

  #events{
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(2rem, 8vw, 3rem);
      text-align: center;
      color: #135DDF;
      margin-top: -100px;
      padding-bottom: 50px;
      font-weight: 200;
      @media screen and (max-width:500px){
        font-size:25px;
      }
  }
`;
