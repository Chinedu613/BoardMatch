import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../image/BoardMatchLogo2.png";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col >
            <img
              src={logo}
              width="600"
              height="350"
              className="mx-auto d-block"
              alt="Matchboard logo"

            />
          </Col>
        </Row>
        <Row>
          <Col className="center-block">
            <h1 style={{textAlign: "center", color: "white"}}>Welcome to Matchboard</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "3%"
            }}>
              <Button block size="lg" style={{ backgroundColor: "black" }}>
                Sign-Up
             </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;