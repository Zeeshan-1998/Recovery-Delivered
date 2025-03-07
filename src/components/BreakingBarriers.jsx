import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/BreakingBarriers.css";

const BreakingBarriers = () => {
    return (
        <section className="breaking-barriers-section">
            <Container>
                <Row className="align-items-start">
                    <Col md={6}>
                        <h2 className="barriers-heading">
                            Breaking Barriers to <br /> Recovery
                        </h2>
                        <p className="barriers-mission mt-4">
                            Our mission is to make Medication Assisted Treatment
                            accessible to people in both major cities and rural
                            communities. We re deeply committed to removing obstacles
                            to recovery, ensuring our clients get the support they need.
                        </p>
                    </Col>

                    <Col md={6}>
                            <p className="barriers-description">
                                We're not just offering a service; we re creating a lifeline. Our platform is designed to
                                eliminate the challenges that often stand in the way of recovery whether it s stigma,
                                inconvenience, or lack of access to quality care
                            </p>

                            <div className="stats-container d-flex justify-content-between mt-5">
                                <div className="text-start stat-block">
                                    <h3 className="stat-value">500+</h3>
                                    <p className="stat-label">Patients Treated</p>
                                </div>
                                <div className="text-start stat-block">
                                    <h3 className="stat-value">300+</h3>
                                    <p className="stat-label">Centers Nationwide</p>
                                </div>
                                <div className="text-start stat-block">
                                    <h3 className="stat-value">4.9/5</h3>
                                    <p className="stat-label">Patients Satisfaction</p>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default BreakingBarriers;