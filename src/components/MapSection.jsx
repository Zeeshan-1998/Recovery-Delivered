import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import building from "../assets/building.png";

const MapSection = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Currently Serve</h2>
        <p className="text-center">
          We believe everyone should have access to treatment and care...
        </p>
        <Row className="mt-5">
          <Col md={6} className="text-center">
            <img src={building} alt="Toronto" className="img-fluid mb-3" />
            <p>Toronto<br/>Ottawa St. and Homer Watson Blvd.</p>
          </Col>
          <Col md={6} className="text-center">
            {/* Replace with your interactive map library or a clickable SVG */}
            <img src={building} alt="USA Map" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MapSection;