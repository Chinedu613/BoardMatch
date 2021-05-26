import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../image/BoardMatchLogo2.png";

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
            <Col className="center">
                <p>Welcome to Matchboard</p>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;