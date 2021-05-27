import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import ConcedeBtn from "../ConcedeBtn"
import PlayBtn from "../PlayBtn"
import MatchProfile from '../MatchProfile';

export default function matchBox() {
    return (
        <Container className="match align-self-center">
            <Row>
                <Col sm={6} className="match__profile">
                    <MatchProfile></MatchProfile>
                </Col>
                <Col sm={6} className="match__game">

                </Col>
            </Row>
            <Row>
                <Col className="text-center"><ConcedeBtn></ConcedeBtn></Col>
                <Col className="text-center"><PlayBtn></PlayBtn></Col>

            </Row>
        </Container>
    )
}