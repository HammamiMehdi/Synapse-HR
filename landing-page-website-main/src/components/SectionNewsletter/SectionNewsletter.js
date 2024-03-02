import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import "../../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../../lib/bootstrap/css/bootstrap.min.css";
import Links from '../../utils/Links';


import NewsletterModal from '../Modals/NewsletterModal';




const SectionNewsletter = () => {



  return (
    <Container >
    <div className="container flex-row d-flex reponsive justify-content-around mt-5 mb-5 section-news">

        <div className='d-flex' id="newsletter">

            <div className='container-icon'>
                <FontAwesomeIcon icon={faEnvelope} className='elem-icon btn-social icon rounded-circle'/>
            </div>
            <div>
                <a href={Links.meeting_booking} target="_blank" rel="noreferrer" className="btn btn-primary btn-hover">Demandez une démo</a>
            </div>
        </div>

        <div className='d-flex elem'>

            <div className='container-icon'>
                <FontAwesomeIcon icon={faPaperPlane} className='elem-icon btn-social icon rounded-circle'/>
            </div>

            <div>
                <button type="button" className="btn btn-primary btn-hover" data-toggle="modal" data-target="#exampleModalCenter">S'abonner à la newsletter</button>
            </div>

        </div>

    </div>

    {/* Modal newsletter */}
    <NewsletterModal />

    </Container>
  )
}

export default SectionNewsletter

// STYLED COMPONENTS

const Container = styled.div`

.elem {

    .elem-icon{
        padding: 11px !important;
    }
}

.container .icon{
    padding: 11px;
    color: white;
    background-color: #02B2B2;
}

.container .container-icon{
    margin-right: 11px;
}

.container div a, .container div button, .container div svg{
    background: #2980b9 !important;
    background: -webkit-linear-gradient(to right, #2c3e50, #2980b9) !important;
    background: linear-gradient(to right, #2c3e50, #2980b9) !important;
}

.container div a:hover, .container div button:hover{
    transition: 0.3s ease-in-out;
    background: #2980D5 !important;
}


@media only screen and (max-width: 630px) {
    .section-news{
        .d-flex:nth-child(2){
            margin-top:20px;
        }
    }

    .reponsive{
        align-items: start !important;
        flex-direction: column !important;
        margin-top: -30px !important;
    }
}

@media only screen and (max-width: 327px) {
    .elem .btn{
        font-size: 14px !important;
    }
}

`;

