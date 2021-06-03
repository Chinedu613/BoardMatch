import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import { useQuery } from 'react-query';

const fetchUsers = async () => {
    const res = await fetch('api/user');
    return res.json();
}


export default function MatchProfile() {

    const { data, status } = useQuery('users', fetchUsers);
    console.log(data);

    return (
        <div>
        <Row>
            <Col className="profile_pic">
                <img src="https://via.placeholder.com/200" className="mx-auto d-block"/>
            </Col>
        </Row>
        <Row>
            <Col className="profile_name">
            {}
            </Col>
        </Row>
        <Row>
            <Col className="profile_bio">
            Skill Level: {}
            </Col>
        </Row>
        </div>
    );
}