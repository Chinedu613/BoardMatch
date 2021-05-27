import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function matchProfile() {
    return (
        <div>
        <Row>
            <Col className="profile_pic">
                <img src="https://via.placeholder.com/200" className="mx-auto d-block"/>
            </Col>
        </Row>
        <Row>
            <Col className="profile_name">
            Match Name
            </Col>
        </Row>
        <Row>
            <Col className="profile_bio">
            Short Bio
            </Col>
        </Row>
        </div>
    );
}