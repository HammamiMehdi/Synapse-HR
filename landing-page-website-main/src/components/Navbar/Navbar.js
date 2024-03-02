import React from "react";
import logo from "../../assets/img/LogoH.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Links from "../../utils/Links";

const NavBar = () => {


  const handleToggle = (e) => {
    let links = document.querySelectorAll(".nav-item.nav-link");
    for(let i = 0; i < links.length; i++){
      links[i].classList.remove("active");
    }
    e.target.classList.add("active");
  }

  return (

    <Container className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 px-lg-5 py-3 py-lg-0">

        <Link className="navbar-brand p-0" to="/">
          <h1 className="text-primary m-0 image">
            <img src={logo} alt="Logo" className="w-75" />
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>

        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" onClick={handleToggle}>
          <div className="navbar-nav ms-auto">
            <a
              href="#solutions"
              className="nav-item nav-link me-5">
              Solution
            </a>
            <a href="#produit" className="nav-item nav-link me-5">
              Fonctionnalités
            </a>
            <a href="#events" className="nav-item nav-link me-5">
              Nos événements
            </a>
            <a href="#contact" className="nav-item nav-link me-5">
              Contactez-nous
            </a>
            <Link
              to={Links.meeting_booking}
              data-bs-target="#contactmodal"
              data-bs-toggle="modal"
              className="btn btn-primary py-2 px-4 demo"
              target="_blank"
              rel="noreferrer">
              Demandez une démo
            </Link>
          </div>

        </div>
      </nav>
    </Container>
  )
};

export default NavBar;

// STYLED COMPONENTS


const Container = styled.div`
nav{
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    background-color: white !important;
    box-shadow: 0 2px 4px 5px rgba(36, 36, 36, 0.1);
}

.navbar-nav {

  .nav-item:hover{
    color: #02B2B2;
    
  }

  .demo {
      &:hover{
        background-color: #057ae2 !important;
      }
    }
}




@media screen and (max-width:992px){

  .navbar{
    padding-right: 40px !important;
    padding-left: 40px !important;
  }
  .navbar-nav a{
    margin-top: 8px !important;
    margin-bottom: 8px !important;

    &:nth-child(1){
      margin-top: 20px !important;
    }

    &:nth-child(2){
      margin-top: -8px !important;
      margin-bottom: -8px !important;
    }

    &:nth-child(3){
      margin-bottom: -8px !important;
    }
  }

  .image img{
    width: 60% !important;
  }

  .navbar button{
    border: 1px solid #02B2B2 !important;
    padding: 3px 8px !important;
    border-radius: 5px !important;

    font-size: 14px !important;

    &:focus{
      box-shadow: rgb(2 178 178 / 74%) 0px 0px 0px 4px !important;
    }
  }

  }



@media screen and (max-width:321px){
  .image img{
    width: 40% !important;
  }

  .navbar button{
    margin-left: -5px;
  }
  
}
`;