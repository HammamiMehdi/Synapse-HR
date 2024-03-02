import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faEdit,
  faChartLine,
  faCalendarCheck
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 8%;
  font-family: 'Montserrat', sans-serif;
  margin-top: 300px;
  margin-bottom: 150px;

  #events{
    @media screen and (max-width:500px){
        font-size:25px !important;
    }
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const ServiceTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 8px;
  color: #303ef7;
`;

const ServiceIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  margin-bottom: 10px;
  color: #303ef7;
`;

const Service = styled.div`
  text-align: center;
  padding: 25px 10px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  background: transparent;
  transition: transform 0.5s, background 0.5s;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: #135DDF;
    color: #fff;
    transform: scale(1.05);

    ${ServiceIcon} {
      color: #fff;
    }

    ${ServiceTitle} {
      color: #fff;
    }
  }
`;





const ServiceDescription = styled.p``;

const Services = () => {
  return (
    <Container>
      <h1
        id="events"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "clamp(2rem, 8vw, 3rem)", // adapt font size based on screen width
          textAlign: "center", // center the text
          marginBottom: "2rem", // add some bottom margin
          paddingBottom: "50px",
          color: "#135DDF",
          fontWeight: 200
        }}
      >
        Jetez un coup d'œil sur <span style={{ fontWeight: "bold" }}>Nos services</span>
      </h1>

      <Row>
        <Service>
          <ServiceIcon icon={faShieldAlt} />
          <ServiceTitle>Sécurité</ServiceTitle>
          <ServiceDescription>
            Synapse HR est hautement sécurisée grâce à des protocoles de sécurité avancés et des normes de cryptage de données strictes. Nous comprenons également que chaque entreprise a des besoins de sécurité uniques, c'est pourquoi nous offrons des options de personnalisation pour répondre aux exigences spécifiques de chaque client.
          </ServiceDescription>
        </Service>
        <Service>
          <ServiceIcon icon={faEdit} />
          <ServiceTitle>Personnalisation</ServiceTitle>
          <ServiceDescription>
            Synapse HR est entièrement personnalisable en fonction des besoins et des demandes spécifiques de chaque client. Nous comprenons que chaque entreprise a ses propres défis et exigences uniques, et nous travaillons en étroite collaboration avec nos clients pour créer une solution qui répond parfaitement à leurs besoins.
          </ServiceDescription>
        </Service>
        <Service>
          <ServiceIcon icon={faChartLine} />
          <ServiceTitle>Analytique</ServiceTitle>
          <ServiceDescription>
            Nous fournissons des rapports détaillés et des tableaux de bord personnalisables pour visualiser les données. Nous sommes également ouverts à intégrer des outils analytiques tiers pour répondre aux besoins spécifiques de nos clients.
          </ServiceDescription>
        </Service>
        <Service>
          <ServiceIcon icon={faCalendarCheck} />
          <ServiceTitle>Disponibilité</ServiceTitle>
          <ServiceDescription>
            Nous surveillons en permanence nos services pour détecter toute anomalie s'il existe et intervenir rapidement pour résoudre les problèmes. Nous sommes également en mesure d'adapter la capacité de nos systèmes en fonction des pics de demande pour assurer une disponibilité optimale en tout temps.
          </ServiceDescription>
        </Service>
      </Row>
    </Container>
  );
};

export default Services;
