import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CBS from "../assets/CBS.png";
import ABC from "../assets/ABC.png";
import FOX from "../assets/FOX.png";
import NBC from "../assets/NBC.png";
import "../styles/FeaturedOn.css";

const logos = [
  { src: ABC, alt: "ABC" },
  { src: NBC, alt: "NBC" },
  { src: FOX, alt: "FOX" },
  { src: CBS, alt: "CBS" },
];

// Duplicate the logos array dynamically
const FeaturedOn = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="featured-on-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: "AS SEEN" / "Featured On" */}
          <Col md={6} className="mb-md-0 me-auto">
            <h6 className="as-seen-subtitle mb-3">AS SEEN</h6>
            <h2 className="featured-on-title">Featured On</h2>
          </Col>

          {/* Right Column: Marquee of Logos */}
          <Col md={6}>
            <div className="marquee-container">
              <div className="marquee-content">
                {duplicatedLogos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img"
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedOn;