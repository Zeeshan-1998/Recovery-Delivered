import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SuboxoneSteps = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Suboxone Treatment In 10 Minutes</h2>
        <Row className="mb-4">
          <Col md={2}>
            <h5>Step 1</h5>
            <p>Download The App</p>
          </Col>
          <Col md={2}>
            <h5>Step 2</h5>
            <p>Complete Onboarding & Documents</p>
          </Col>
          <Col md={2}>
            <h5>Step 3</h5>
            <p>Schedule Your First Visit</p>
          </Col>
          <Col md={2}>
            <h5>Step 4</h5>
            <p>Meet With Licensed Provider</p>
          </Col>
          <Col md={2}>
            <h5>Step 5</h5>
            <p>Pick Up Medication</p>
          </Col>
          <Col md={2} className="text-center d-flex align-items-center">
            <Button variant="success">Download The App Today</Button>
          </Col>
        </Row>
        {/* If you want a Lottie or GIF in the center, you can place it here */}
      </Container>
    </section>
  );
};

export default SuboxoneSteps;