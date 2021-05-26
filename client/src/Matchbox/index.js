import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

export default function matchBox() {
    return (
        <Container className="match">
            <Row>
                <Col sm={6} className="match__profile">

                </Col>
                <Col sm={6} className="match__game">

                </Col>
            </Row>
        </Container>
    )
}