import React from "react";
import styled from "styled-components";
import chatSmile from "../../assets/img/chat_smile.svg";
import UrlAPI from "../../utils/UrlAPI";

const Chatbot = () => {
  const handleClick = (val) => {
    var bouton_open = document.querySelector("#toggle");
    var bouton_close = document.querySelector(".chat-box");

    if (val === "open") {
      bouton_open.style.display = "none";
      bouton_close.style.display = "block";
    } else {
      bouton_open.style.display = "block";
      bouton_close.style.display = "none";
    }
  };

  return (
    <>
      <Toggle id="toggle" title="Ecrivez-nous ici !" onClick={() => handleClick("open")}>
        <img src={chatSmile} alt="chat_smile" />
      </Toggle>
      <ChatBox
        className="chat-box hidden-div animated fadeInRight"
        style={{ display: "none" }}
      >
        <div
          className="btn btn-close"
          
          onClick={() => handleClick("close")}
        ></div>
        <iframe src={UrlAPI.chatBot} title="WebChat"></iframe>
      </ChatBox>
    </>
  );
};

export default Chatbot;

// STYLED COMPONENTS

const Toggle = styled.div`
  position: fixed;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  bottom: 20px;
  right: 20px;
  background: #00f260;
  background: -webkit-linear-gradient(to right, #0575e6, #02b2b2);
  background: linear-gradient(to right, #0575e6, #02b2b2);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 999;

  &:hover {
    background: #00f260;
    background: -webkit-linear-gradient(to right, #02b2b2, #0575e6);
    background: linear-gradient(to right, #02b2b2, #0575e6);
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: invert(1);
  }
`;

const ChatBox = styled.div`
  position: fixed;
  width: 25%;
  height: 70%;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  iframe {
    border-radius: 10px 10px 0px 0px;
    border: 1px solid #ccc;
    background-color: #fffcfc;
    width: 100%;
    height: 100%;
  }

  div.btn-close {
    position: absolute;
    right: 20px;
    top: 8px;
    background-color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 10px;
    font-weight: bold;
  }

  /* all size responsive */

  @media screen and (max-width: 3840px) {
  }

  @media screen and (max-width: 2560px) {
  }

  @media screen and (max-width: 1600px) {
  }

  @media screen and (max-width: 1400px) {
    width: 30%;
  }

  @media screen and (max-width: 1200px) {
    width: 35%;
  }

  @media screen and (max-width: 992px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 640px) {
    width: 50%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  @media screen and (max-width: 375px) {
  }

  @media screen and (max-width: 320px) {
  }

  @media screen and (max-width: 280px) {
  }
`;
