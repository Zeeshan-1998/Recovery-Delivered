import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/GradientBanner.css";

const GradientBanner = () => {
  return (
    <section className="gradient-banner d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h6 className="banner-subtitle">SECURE ACCESS TO YOUR MEDICATIONS</h6>
            <h1 className="banner-title">Get Your Meds Online Today</h1>
            <p className="banner-description">
              We have partnered with RX-Outreach to provide mail order medications at a fraction
              of the price you may find in your local pharmacy. Meet your chronic illness provider
              online today and get your medication delivered as quickly as 24 hours later.
            </p>
            <Button variant="dark" className="banner-button">
              Get The App <span className="arrow">↗</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GradientBanner;