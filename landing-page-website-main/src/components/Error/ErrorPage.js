import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ErrorPage = () => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }



  return (
    <Container>
        <div className="body d-flex align-items-center">
            <div id="bloc" className="p-4 w-75 rounded-4">
                <div className="w-50 m-auto">
                    <div className="align-self-center">
                        <h1>404</h1>
                        <h2>Oppsss !</h2>
                        <p>La page que vous recherchez n'existe pas.
                        vous pouvez cliquer sur le bouton ci-dessous
                        pour revenir à la page d'accueil.
                        </p>
                        <button className="btn blue" onClick={handleNavigate}>Page d'accueil</button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ErrorPage


// STYLED COMPONENTS

const Container = styled.div`
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');


#bloc{
    margin:auto !important;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
}

.body{
    height: 100vh;
}

#bloc.w-75{
    width: 90% !important;
}

#bloc .w-50{
    width: 90% !important;
}

.align-self-center h1 {
  font-size: 7.5em;
  margin: 15px 0px;
  font-weight:bold;
  text-align: center;
}


.align-self-center h2 {
  font-weight:bold;
}




.btn {
  z-index: 1;
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  transition: 0.2s ease;
  font-weight: bold;
  margin: 5px 0px;
}

.btn.blue {
    border: 4px solid #135DDF;
    color: #135DDF;
}

.btn.blue:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: #135DDF;
    z-index: -1;
    transition: 0.2s ease;
  }


.btn.blue:hover {
    color: white;
    background: #135DDF;
    transition: 0.2s ease;
}

.btn.blue:hover:before {
    width: 100%;
}

/* all size responsive */
@media screen and (max-width:1400px) {

}


@media screen and (max-width:1200px) {
    
}

@media screen and (max-width:992px) {
}

@media screen and (max-width:768px) {

    #bloc{
      margin-top:70px;
      margin-bottom:70px;
    }
}

@media screen and (max-width:480px) {
    .w-50{
        width: 90% !important;
    }
}

@media screen and (max-width:375px) {

}


@media screen and (max-width:320px) {
    .align-self-center h1 {
        font-size: 5.5em;
    }

    .btn {
        padding: 8px 20px;
        font-size: 1em;
        margin: 5px 0px;
    }

    .w-50{
        width: 90% !important;
    }
}

@media screen and (max-width:280px) {
    
}


`;
