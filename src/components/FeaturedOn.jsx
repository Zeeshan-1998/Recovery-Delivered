import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CBS from "../assets/CBS.png";
import ABC from "../assets/ABC.png";
import FOX from "../assets/FOX.png";
import NBC from "../assets/NBC.png";

const FeaturedOn = () => {
  return (
    <section className="py-5">
      <Container>
        <h4 className="text-center mb-4">As Seen Featured On</h4>
        <Row className="text-center">
          <Col><img src={CBS} alt="CBS" /></Col>
          <Col><img src={ABC} alt="ABC" /></Col>
          <Col><img src={NBC} alt="NBC" /></Col>
          <Col><img src={FOX} alt="FOX" /></Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedOn;