import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import MatchedGame from '../MatchedGame';
import "./style.css";


export default function matchBox() {
    return (
        <Container className="match align-self-center">
            <Row>
                <Col sm={6} className="match__profile">

                </Col>
                <Col sm={6} className="match__game">
                    <MatchedGame />
                </Col>
            </Row>
        </Container>
    )
}