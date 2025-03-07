import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../assets/usa-map.png';

const MapSection = () => {
    return (
        <Container className="my-5 text-center">
            <h2>States We Currently Serve</h2>
            <img src={img} alt="USA Map" className="img-fluid" />
        </Container>
    );
};

export default MapSection;