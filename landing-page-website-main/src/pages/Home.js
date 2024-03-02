import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/HeroDemo/Hero";
import SectionNewsletter from "../components/SectionNewsletter/SectionNewsletter";
import EventCarousel from "../components/EventCaroussel/EventCarousel";
import WebMobile from "../components/WebMobile/WebMobile";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import "./HomeStyle.css";
import EventCard from "../components/EventCards/EventCard";
import Chatbot from "../components/Chatbot/Chatbot";

const Home = () => {
  
  return (
    <>
      <NavBar />
      <EventCarousel />
      <Carousel />
      <WebMobile />
      <EventCard />
      <Hero />
      <Services />
      <SectionNewsletter />
      <Chatbot />
      <Footer />
    </>
  );
};

export default Home;
