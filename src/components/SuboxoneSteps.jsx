import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/SuboxoneSteps.css";

const stepsData = [
  {
    title: "Step 1 - Download The App",
    description: "Click the link to download our app to get started."
  },
  {
    title: "Step 2 - Complete Onboarding Process & Documents",
    description: "Provide medical history and sign treatment forms."
  },
  {
    title: "Step 3 - Schedule Your First Visit",
    description: "Our onboarding team will send you a link to book your first meeting. Many times, this is the same day."
  },
  {
    title: "Step 4 - Meet With Licensed Provider",
    description: "At the time of your appointment, open the app on your phone to have your visit."
  },
  {
    title: "Step 5 - Pick Up Medication",
    description: "Your script will be sent to your pharmacy of choice for pick up the same day."
  }
];

const SuboxoneSteps = () => {
  return (
    <section className="suboxone-steps-section">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={8}>
            <h6 className="steps-subtitle">GET SAME-DAY ONLINE</h6>
            <h2 className="steps-title">Suboxone Treatment In 10 Minutes</h2>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <Button className="steps-download-btn mt-3 mt-md-0">
              Download The App Today <span style={{ marginLeft: "0.5rem" }}>↗</span>
            </Button>
          </Col>
        </Row>

        <div className="steps-orb-wrapper">
          <div className="steps-orb-background"></div>

          <Row className="mb-4">
            <Col md={{ span: 4, offset: 0 }} className="mb-4">
              <div className="step-card">
                <h5 className="step-title">{stepsData[0].title}</h5>
                <p className="step-description">{stepsData[0].description}</p>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }} className="mb-4">
              <div className="step-card">
                <h5 className="step-title">{stepsData[1].title}</h5>
                <p className="step-description">{stepsData[1].description}</p>
              </div>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={{ span: 4, offset: 0 }} className="mb-4">
              <div className="step-card">
                <h5 className="step-title">{stepsData[2].title}</h5>
                <p className="step-description">{stepsData[2].description}</p>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 4 }} className="mb-4">
              <div className="step-card">
                <h5 className="step-title">{stepsData[3].title}</h5>
                <p className="step-description">{stepsData[3].description}</p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={{ span: 6, offset: 3 }}>
              <div className="step-card">
                <h5 className="step-title" style={{ textAlign: "center" }}>{stepsData[4].title}</h5>
                <p className="step-description" style={{ textAlign: "center" }}>{stepsData[4].description}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default SuboxoneSteps;