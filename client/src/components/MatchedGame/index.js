import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

export default function MatchedGame() {
    return (
        <Container>
            
        <Row>
            <Col className="matched__game-image">
            <div>
                <img src="https://www.placecage.com/200/200" /> 
            </div>
            </Col>
        </Row>
        <Row>
            <Col className="matched__game-title">
            <h3>Game Title</h3>
            </Col>
        </Row>

        </Container>
    )
}