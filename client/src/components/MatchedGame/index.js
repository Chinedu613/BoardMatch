import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

export default function MatchedGame() {
    return (
        <Container>
            <Row>
                <Col sm={12} className="matched__game-image">
                    <div>
                        <img src="https://www.placecage.com/240/160" /> 
                        </div>
                </Col>
                <Col sm={12} className="matched__game-title">
                    <div>
                        <h3>Game Title</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}