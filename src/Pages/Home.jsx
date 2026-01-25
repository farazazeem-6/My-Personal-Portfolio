import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import React, { Fragment } from "react";
import Skill from "../components/Skills/Skill";
import Project from "../components/Projectss/Project";
import Testimonials from "../components/Testimonials/Testimonials";
import ScrollDirectionMarquee from "../components/TextMarqueeComp/TextMarquee";
import LocomotiveScroll from "locomotive-scroll";
import Contact from "../components/Contact/Contact";

const locomotiveScroll = new LocomotiveScroll();

function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <ScrollDirectionMarquee />
      <Skill />
      <Project />
      <Testimonials />
      <Contact/>
    
      
    </Fragment>
  );
}

export default Home;
