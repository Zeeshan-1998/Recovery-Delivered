import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import building from "../assets/building.png";
import MapIcon from "../assets/map-icon.png";
import "../styles/MapSection.css";

const geoUrl = "https://unpkg.com/us-atlas/states-10m.json";

const MapSection = () => {
  // Click handler for each state
  const handleStateClick = (geo) => {
    alert(`Clicked on state: ${geo.properties.name}`);
  };

  return (
    <section className="map-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h6 className="states-subtitle text-uppercase">STATES WE</h6>
            <h2 className="map-title">Currently Serve</h2>
            <p className="map-description">
              We believe everyone should have access to treatment and care.
              That’s why we’re teaming up with providers all over the country.
              Click on a green state to see the insurance companies we currently
              accept and to learn more about online Suboxone doctors in your area.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 text-start">
            <div className="toronto-image-wrapper">
              <img
                src={building}
                alt="Toronto"
                className="img-fluid toronto-image"
              />
              <div className="toronto-image-overlay"></div>
            </div>
            <h5 className="toronto-title mt-3">Toronto</h5>
            <p className="toronto-address">
              <img
                src={MapIcon}
                alt="Map Icon"
                className="map-pin-icon"
              />
              Ottawa St. and Homer Watson Blvd.
            </p>
          </Col>

          <Col md={6} className="text-center">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <ComposableMap
                projection="geoAlbersUsa"
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) => (
                    <>
                      {geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#49C7AB"
                          stroke="#fff"
                          // onClick={() => handleStateClick(geo)}
                          style={{
                            default: { outline: "none" },
                            hover: {
                              fill: "#ff8c00 ",
                              outline: "none",
                              cursor: "pointer",
                            },
                            pressed: { outline: "none" },
                          }}
                        />
                      ))}

                      {geographies.map((geo) => {
                        const { name, postal } = geo.properties;
                        if (!name || !postal) return null;

                        // Calculate centroid for labeling
                        const centroid = geoCentroid(geo);
                        console.log(centroid);

                        return (
                          <Marker key={geo.rsmKey + "-label"} coordinates={centroid}>
                            <text
                              textAnchor="middle"
                              fill="#fff"
                              fontSize={10}
                              fontWeight="600"
                              stroke="#000"
                              strokeWidth={0.5}
                              paintOrder="stroke"
                              style={{ pointerEvents: "none" }}
                            >
                              {name}
                            </text>
                          </Marker>
                        );
                      })}
                    </>
                  )}
                </Geographies>
              </ComposableMap>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MapSection;