import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nicholas O.",
    text: "Recovery Delivered is great! I cannot believe how fast and easy...",
    rating: 5,
  },
  {
    name: "Christine M.",
    text: "My daughter started her online opioid treatment program...",
    rating: 5,
  },
  {
    name: "Heather B.",
    text: "If you need help, go here. Get online. Sign up. Pay the fees...",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Clients' Testimonials</h2>
        <Row>
          {testimonials.map((t, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Text>{t.text}</Card.Text>
                    <h6 className="mt-3">{t.name}</h6>
                    <p>{"⭐".repeat(t.rating)}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;