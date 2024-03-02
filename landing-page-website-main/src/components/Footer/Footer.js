import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../assets/img/LogoH.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Links from '../../utils/Links';

const Footer = () => {





  return (
    <MDBFooter id='contact' bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom footer-personalisation'>
        <div className='me-5 d-none d-lg-block'>
          <span>Connectez-vous sur nos réseaux sociaux :</span>
        </div>
        <div className='footer-logo'>
          <a href={Links.synapse_facebook} className='me-4 text-reset'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={Links.synapse_linkedin} className='me-4 text-reset'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={Links.synapse_youtube} className='me-4 text-reset'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 '>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                <img src={logo} alt='logo' />
              </h6>
              <p>
                Synapse-HR est l’outil de bien-être d’excellence ! La solution permet le développement personnel à travers la reconnaissance et la valorisation de chacun. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h5 className='text-uppercase fw-bold mb-4 text-color'>A propos de nous</h5>
              <p className='footer-cat-links'>
                <a href='#!' className='text-reset'>
                  Conditions et services
                </a>
              </p>
              <p className='footer-cat-links'>
                <a href='#!' className='text-reset'>
                  Politique de confidentialité
                </a>
              </p>

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h5 className='text-uppercase fw-bold mb-4 text-color'>Aide</h5>
              <p className='footer-cat-links'>
                <a href={Links.meeting_booking} className='text-reset' target="_blank" rel="noreferrer">
                  Demandez une démo
                </a>
              </p>
              <p className='footer-cat-links'>
                <a href='#events' className='text-reset'>
                  Nos événements
                </a>
              </p>
              <p className='footer-cat-links'>
                <a href='#solutions' className='text-reset'>
                  Video démo
                </a>
              </p>
              <p className='footer-cat-links'>
                <a href='#newsletter' className='text-reset' data-toggle="modal" data-target="#exampleModalCenter">
                  Newsletter
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h5 className='text-uppercase fw-bold mb-4 text-color'>Contact</h5>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-2 text-color" />
                Rue du Lac Huron, Immeuble La Brise du Lac, 1053 Résidence Farah, Tunis – Tunisie
                <strong> 1053, Tunis, TN</strong>
              </p>
              <a href="mailto:Synapseapp@biware-consulting.com" className="text-muted">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="me-3 text-color" />
                  Synapseapp@biware-consulting.com
                </p>
              </a>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3 text-color" />+ 216 36 361 801
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 footer-personalisation'>
        © 2023 Copyright - Synapse HR
      </div>
    </MDBFooter>
  );
}

export default Footer