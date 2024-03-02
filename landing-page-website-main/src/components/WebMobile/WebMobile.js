import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faDesktop } from "@fortawesome/free-solid-svg-icons";
import mobile from "../../assets/img/webmobile/mobile.webp";
import web from "../../assets/img/webmobile/web.webp";
import Title from "../EventCards/Title";

const WebMobile = () => {
  let [change, setChange] = React.useState("phone");

  const handleToggle = (val) => {
    let phone = document.querySelector(".top .phone");
    let computer = document.querySelector(".top .computer");
    let devicePhone = document.querySelector("#device .device-phone");
    let deviceWeb = document.querySelector("#device .device-web");

    if (val === "phone") {
      setChange((change = val));
      if (!phone.classList.contains("active")) {
        phone.classList.add("active");
        computer.classList.remove("active");
         // display none
      devicePhone.style.display = "inline";
      deviceWeb.style.display = "none";
      }
    } else {
      setChange((change = val));
      if (!computer.classList.contains("active")) {
        computer.classList.add("active");
        phone.classList.remove("active");
        devicePhone.style.display = "none";
        deviceWeb.style.display = "inline";
      }
    }
  };

  return (
    <Container id="produit">
      <div className="container">
        <div className="d-flex justify-content-around  flex-column bloc">
          <div className="top d-flex justify-content-around align-items-center">
            <div></div>
            <div
              className="phone text-center bg-light btn active"
              onClick={() => handleToggle("phone")}
            >
              <FontAwesomeIcon icon={faMobile} />
              <p className="pt-2">Mobile</p>
            </div>
            <div
              className="computer text-center bg-light btn"
              onClick={() => handleToggle("web")}
            >
              <FontAwesomeIcon icon={faDesktop} />
              <p className="pt-2">Web</p>
            </div>
            <div></div>
          </div>
          <div className="bottom d-flex">
            <div className="container-device">
              <div id="device" className="device">
                  <img src={mobile} className="device-phone" alt="mobile device" />
                  <img src={web} className="device-web" alt="web device" />
              </div>
              <div className="shadow"></div>
            </div>
            <div className="description-device" >
              {change === "phone" ? (
                <Title
                  title="Version Mobile"
                  other={<ul>
                    <li>Culture d'appréciation</li>
                    <li>Système de récompense</li>
                    <li>Développement personnel</li>
                  </ul>}
                />
              ) : (
                <Title
                  title="Version Web"
                  other={<ul>
                    <li>Dashboard analytique</li>
                    <li>Vue 360° des activités</li>
                    <li>Développement des collaborateurs et des équipes</li>
                  </ul>}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WebMobile;

// STYLED COMPONENTS

const Container = styled.section`
  margin-bottom: 300px;
  padding-top: 50px;

  .container-device{
    @media screen and (max-width:880px){
      height: 500px;
    }
    
    @media screen and (max-width:700px){
        margin-top: 166px;
        width: 80%;
        margin-left: 43px;
    }

    @media screen and (max-width:600px){
      height:400px !important;
    }

    @media screen and (max-width:500px) {
        margin-top: 20px;
    }
  }

  .bloc {
    height: 700px;

    .top {
      flex: 1;

      .phone {
        padding: 20px 20px 0 20px;
        border-radius: 20%;
        background-image: linear-gradient(
          144deg,
          #135ddf,
          #135ddf 50%,
          #00ddeb
        );
        border: 0;
        box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
        color: #ffffff;
        opacity: 0.8;
        line-height: 1em;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        cursor: pointer;
        transition: all 0.3s;

        &:hover,
        &:active {
          outline: 0;
          color: #ffffff;
          opacity: 1;
        }

        &:hover p {
          background: none;
        }

        &:active {
          transform: scale(0.9);
        }

        svg {
          font-size: 22px;
        }
      }

      .computer {
        padding: 20px 27px 0 27px;
        border-radius: 20%;
        background-image: linear-gradient(
          144deg,
          #135ddf,
          #135ddf 50%,
          #00ddeb
        );
        border: 0;
        box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
        color: #ffffff;
        opacity: 0.8;
        line-height: 1em;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        cursor: pointer;
        transition: all 0.3s;

        &:hover,
        &:active {
          outline: 0;
          color: #ffffff;
          opacity: 1;
        }

        &:hover p {
          background: none;
        }

        &:active {
          transform: scale(0.9);
        }

        svg {
          font-size: 22px;
        }
      }

      .active {
        border: 4px solid #ffce00;
        transform: scale(1.1);
        opacity: 1;
      }
    }

    .bottom {
      flex: 4;
      margin-top: 80px;
      position: relative;
      height: 400px;
      .device {
        animation: deviceFloat 3.4s ease-in-out infinite;
        width: 100%;
        text-align: center;

        .device-phone {
          width: 30%;
          height: 40%;
          object-fit: cover;
          margin-right: 30%;

          @media screen and (max-width:500px) {
            margin-top: -100px !important;
            height: 50% !important;
            width: 100% !important;
          }
        }

        .device-web {
          display: none;
          width: 40%;
          height: 40%;
          object-fit: cover;
          margin-right: 35%;

          @media screen and (max-width:500px) {
            margin-top: 280px !important;
            height: 50% !important;
            width: 100% !important;
            margin-right: 0 !important;
          }
        }
      }

      .description-device{
        section{
          position: absolute !important;
          top: -20%;
          left: 28%;
          div {
            width: 100%;
            h1{
              margin-bottom: 20px;
              text-align: center;
            }
            div{
              width: auto;
              ul {
                list-style: circle;
              }
            }
          }
        }
        @media screen and (max-width:1200px) {
          section{
          div {
            ul{
              width: 400px;
            }
          }
          }
        }

        @media screen and (max-width:880px) {
          section {
            left: 5%;
            width: 35%;
            ul{
              width: 300px !important;
              text-align: left !important;
            }

          }
        }

        @media screen and (max-width:768px){
          section {
            top:0 !important;
          }
        }
        
        @media screen and (max-width:700px) {
          section{
            left: -65%;
            width: 60%;

            ul{
              width: 400px;
            }
          }
        }
        @media screen and (max-width:500px) {
          section{
            left: -73%;
            ul{
              width: 280px !important;
            }
          }
        }
        @media screen and (max-width:376px) {
          section{
            left: -105%;
            width: 198px !important;
          }
        }
      }

      @keyframes deviceFloat {
        0% {
          transform: translatey(0px);
        }

        50% {
          transform: translatey(-50px);
        }

        100% {
          transform: translatey(0px);
        }
      }

      .shadow {
        background: gray;
        width: 300px;
        height: 25px;
        top: 145%;
        left: 23%;
        animation: shadowAnimation 3.5s ease-in-out infinite;
        position: absolute;
        border-radius: 50%;
        opacity: 0.3;
      }

      @keyframes shadowAnimation {
        0%,
        100% {
          transform: scale(0.6);
        }
        50% {
          transform: scale(0.3);
          filter: blur(10px);
        }
      }

      @media screen and (max-width:880px) {
        flex-direction: column-reverse;
      }
    }

  }


  /* all size responsive */

@media screen and (max-width:1280px) and ( min-width:1201px) {

  .bloc {
    .bottom {
      .device {
        .device-phone {
          width: 30%;
          height: 30%;
          object-fit: cover;
          margin-right: 15%;
        }
        .device-web {
          width: 40%;
          height: 40%;
          object-fit: cover;
          margin-right: 35%;
        }
      }
    }
  }
}

@media screen and (max-width:1200px) {
  .bloc {
    .top{
      .phone {
        padding: 18px 18px 0 18px;
        svg {
          font-size: 20px;
        }
      }
      .computer {
        padding: 18px 25px 0 25px;
        svg {
          font-size: 20px;
        }
      }

      p{
        font-size: 15px;
      }
    }


    .bottom {
      flex: 4;
      .device {
        .device-phone {
          width: 30%;
          height: 30%;
          object-fit: cover;
          margin-right: 25%;
        }
        .device-web {
          width: 40%;
          height: 40%;
          object-fit: cover;
        }
      }

      .shadow {
        width: 400px;
        height: 25px;
        top: 130%;
        left: 18%;
      }
    }
  }
}

@media screen and (max-width:992px) {
  margin-bottom: 100px;
  .shadow {
    top: 100% !important;
    left: 10% !important;
  }
}

@media screen and (max-width:880px) {

}

@media screen and (max-width:768px) {
  margin-top: 50px;
  margin-bottom: 130px;
  .container-device{
    height: 500px;
  }
  .bloc {
    .bottom {
      .device {
        .device-phone {
          width: 40%;
          height: 20%;
          margin-top: 0 !important;
          object-fit: cover;
        }
        .device-web {
          width: 50%;
          height: 50%;
          margin-top: 0 !important;
          object-fit: cover;
        }
      }

      .shadow {
        top: 108% !important;
        left: 8% !important;
      }
    }
  }
}

@media screen and (max-width:701px) {
  margin-bottom:200px;
  .bloc {
    .bottom {
      .device {
        .device-phone {
          margin-top: 200px !important;
          margin-right:20px;
        }
        .device-web {
          margin-top: 200px !important;
          margin-right:20px;
        }
      }
      .shadow {
        top: 115% !important;
        left: 15% !important;
      }
    }
  }
}

@media screen and (max-width:600px) {
  margin-top: 80px;
  margin-bottom: 400px;
  .bloc {
    height: 500px;
    .bottom {
    
      .device {
        .device-phone {
          width: 65% !important;
          height: 65% !important;
          object-fit: cover;
          margin-top: 200px !important;
        }
        .device-web {
          width: 70%;
          height: 70%;
          object-fit: cover;
          margin-top: 230px !important;
        }
      }

      .shadow {
        top: 160% !important;
        left: 5% !important;
      }
    }
  }
}

@media screen and (max-width:480px) {
  margin-top: -80px;
  margin-bottom: 350px;
  .bloc {
    height: 500px;
    .bottom {
      flex: 4;
      .device {
        .device-phone {
          width: 50%;
          height: 50%;
          object-fit: cover;
        }
        .device-web {
          width: 70%;
          height: 70%;
          object-fit: cover;
        }
      }

      .shadow {
        top: 160% !important;
        left: -6% !important;
      }
    }
  }
}

@media screen and (max-width:376px) {
  margin-top: -70px;
  margin-bottom: 200px;
  .bloc {
    height: 400px;
    .bottom {
      flex: 4;
      .device {
        .device-phone {
          width: 40%;
          height: 40%;
          object-fit: cover;
        }
        .device-web {
          width: 70%;
          height: 70%;
          object-fit: cover;
        }
      }

      .shadow {
        width: 200px;
        height: 25px;
        top: 120%;
        left: 20%;
      }
    }
  }
}

@media screen and (max-width:320px) {
  margin-top: 100px; 
  margin-bottom: 200px;
  .bloc {
    height: 320px;
    .top{
      .phone {
        height: 58px;
        padding: 10px 10px 0 10px;
        line-height: 1em;
        svg {
          font-size: 14px;
        }
      }
      .computer {
        height: 58px;
        padding: 10px 17px 0 17px;
        line-height: 1em;
        svg {
          font-size: 14px;
        }
      }

      p{
        font-size: 10px;
      }

      .active {
        border: 3px solid #ffce00;
      }
    }



    .bottom {
      flex: 4;
      .device {
        .device-phone {
          width: 40%;
          height: 40%;
          object-fit: cover;
        }
        .device-web {
          width: 70%;
          height: 70%;
          object-fit: cover;
        }
      }

      .shadow {
        top: 120% !important;
        left: 16% !important;
      }
    }
  }
}

`;
