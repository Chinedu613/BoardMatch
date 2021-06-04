import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import ConcedeBtn from "../ConcedeBtn"
import PlayBtn from "../PlayBtn"
import MatchProfile from '../MatchProfile';


export default function MatchBox() {
    return (
        <Container className="match align-self-center">
            <Row>
                <Col className="match__profile">
                    <MatchProfile></MatchProfile>
                </Col>

            </Row>
            <Row>
                <Col className="text-center"><PlayBtn></PlayBtn></Col>
                <Col className="text-center"><ConcedeBtn></ConcedeBtn></Col>
            </Row>
        </Container>
    )
}