import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MatchBox from "../components/Matchbox";
import Sidebar from "../components/Sidebar";

function Game() {
  return (
    <div>
      <Container fluid>
        <Row>
            <Col sm={3}>
              <Sidebar />
            </Col>
            <Col sm={9} className="d-flex align-items-center">
              <MatchBox />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Game;