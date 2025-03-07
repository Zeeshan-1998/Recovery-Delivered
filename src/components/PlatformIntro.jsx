import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hero from "../assets/hero-bg.png";
import "../styles/PlatformIntro.css";

const PlatformIntro = () => {
  return (
    <section className="platform-intro-section py-5 bg-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h6 className="intro-subtitle">WELCOME TO RECOVERY DELIVERED</h6>
            <h2 className="intro-title mt-4">
              Your Fully Online Suboxone <br />
              Treatment Platform
            </h2>
            <p className="intro-description mt-3">
              100% online opioid treatment with licensed buprenorphine providers starts
              at just $99/month.
            </p>
            <p className="intro-description">
              With monthly and weekly meetings based on where you are
              in your recovery. Get a same-day appointment and script.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <div className="video-wrapper position-relative">
              <img
                src={hero}
                alt="Video Thumbnail"
                className="img-fluid rounded"
              />
              <div className="play-overlay">
                <div className="play-button">
                  <span className="play-icon">▶</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PlatformIntro;