import React from "react";
import confetti from "canvas-confetti";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";


const Button = styled.button`
  cursor: pointer;
  margin: 20px auto 0;
  padding: 0;
  background: #2980b9;
  background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);
  background: linear-gradient(to right, #2c3e50, #2980b9);
  color: #fff;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.5em 1.25em;
  border-radius: 2em;
  position: relative;
  display: flex;
  gap: 0.5em;
  align-items: center;
  transition: all 0.3s;
  box-shadow:
    0px 1.7px 2.2px rgba(0, 0, 0, 0.02),
    0px 4px 5.3px rgba(0, 0, 0, 0.028),
    0px 7.5px 10px rgba(0, 0, 0, 0.035),
    0px 13.4px 17.9px rgba(0, 0, 0, 0.042),
    0px 25.1px 33.4px rgba(0, 0, 0, 0.05),
    0px 60px 80px rgba(0, 0, 0, 0.07);

  .icon{
    width: 20px;
    height: 20px;
    color: #ffbc08;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (max-width:768px) {
  
    
    align-items: center;
    justify-content: center;
    font-size: small;
    margin-left: auto;
    margin-top: 50px;
  
}

@media screen and (max-width:320px) {
    align-items: center;
    justify-content: c enter;
    font-size: small;
    margin-left: auto;
    margin-top: 50px;
}
`;

function TopButton() {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 180,
      colors: ["#135ddf", "#ffce00", "#02b2b2", "#53cbf4", "#34e87d"]
    });
  }

  return (

    <Button onClick={handleConfetti}>
      <FontAwesomeIcon icon={faTrophy} className="icon"/>
      <span><strong>TOP</strong> 3 HR Startups- TUNISIE</span>
      <FontAwesomeIcon icon={faTrophy} className="icon"/>
    </Button>
  );
}

export default TopButton;
