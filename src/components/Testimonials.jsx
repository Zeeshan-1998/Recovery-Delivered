import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Testimonials.css";
import testimonials1 from "../assets/testimonials-1.png";
import testimonials2 from "../assets/testimonials-2.png";
import testimonials3 from "../assets/testimonials-3.png";

const testimonials = [
  {
    name: "Nicholas O.",
    text: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
    rating: 4,
    avatar: testimonials1,
  },
  {
    name: "Christine M.",
    text: "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
    rating: 4,
    avatar: testimonials2,
  },
  {
    name: "Heather B.",
    text: "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
    rating: 4,
    avatar: testimonials3,
  },
];

const Testimonials = () => {
  // Start with -1 so no card is focused initially
  const [activeIndex, setActiveIndex] = useState(-1);

  // Move to previous card
  const handlePrev = () => {
    if (activeIndex === -1) {
      // If no card is active, set last card
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    }
  };

  // Move to next card
  const handleNext = () => {
    if (activeIndex === -1) {
      // If no card is active, set first card
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  return (
    <section className="testimonials-section py-5">
      <Container>
        {/* Top row: Heading on the left, Arrows on the right */}
        <Row className="align-items-center mb-4">
          <Col xs={12} md={6}>
            <h6 className="clients-subtitle text-uppercase">OUR CLIENT’S</h6>
            <h2 className="testimonials-title">Testimonials</h2>
          </Col>
          <Col
            xs={12}
            md={6}
            className="arrow-wrapper d-flex justify-content-end align-items-center mt-3 mt-md-0"
          >
            <div className="arrow-icon me-3" onClick={handlePrev}>
              &#8592;
            </div>
            <div className="arrow-icon" onClick={handleNext}>
              &#8594;
            </div>
          </Col>
        </Row>

        {/* Cards row */}
        <Row className="g-3">
          {testimonials.map((item, index) => {
            // Determine opacity: if activeIndex == -1, show all at full opacity
            // Otherwise, only activeIndex card is 1, others 0.2
            let cardOpacity = 1;
            let cardPointer = "auto";
            if (activeIndex !== -1) {
              cardOpacity = index === activeIndex ? 1 : 0.2;
              cardPointer = index === activeIndex ? "auto" : "none";
            }

            return (
              <Col md={4} key={index} className="d-flex align-items-stretch">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    opacity: cardOpacity,
                    pointerEvents: cardPointer,
                  }}
                  className={`testimonial-card w-100 h-100 ${
                    index === activeIndex ? "tilt-card" : ""
                  }`}
                  // On hover, set this card as active
                  onMouseEnter={() => setActiveIndex(index)}
                  // On mouse leave remove focus
                  onMouseLeave={() => setActiveIndex(-1)}
                >
                  <Card.Body className="d-flex flex-column">
                    <div className="rating-stars mb-3">
                      {"★".repeat(item.rating) + "☆".repeat(5 - item.rating)}
                    </div>
                    <p className="testimonial-text flex-grow-1">{item.text}</p>
                    <div className="testimonial-footer d-flex align-items-center mt-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="testimonial-avatar"
                      />
                      <h6 className="testimonial-name ms-3">{item.name}</h6>
                    </div>
                  </Card.Body>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;