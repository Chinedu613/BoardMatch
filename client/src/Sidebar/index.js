import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

// Sidebar for Game Page
export default function sideBar() {
    return (
        <Container className="sidebar">
            <Row>
                <Col className="sidebar__content">
                    <div className="sidebar__content-title">
                        <h4>
                            Matches
                        </h4>
                        <hr></hr>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

