import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/hero.css";
import NavigationBar from "./Navbar";

const Hero = () => {
  return (
    <section className="hero pt-2 align-items-center positon-relative">
      <NavigationBar />
      <Container className="position-relative text-white hero-content">
        <p className="lead">No lines, less hassle, Lower costs.</p>
        <h1 className="display-4 fw-bold">
          Easy Online Suboxone <br/>
          Treatment for Opioid <br/>
          Addiction
        </h1>
        <Button className="button-hero mt-4">
          Download The App Today <span className="arrow">↗</span>
        </Button>
      </Container>
    </section>
  );
};

export default Hero;