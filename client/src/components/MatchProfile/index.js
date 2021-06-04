import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import { useQuery } from 'react-query';
import Users from '../../utils/Users';
import Atlas from '../../utils/Atlas';
import axios from 'axios';



export default function MatchProfile() {

    const { data, isLoading, error } = useQuery('users', () => axios.get('/api/users').then((res) => res.json()));
    if (isLoading) return (<div style={{ color: "white" }}>Is Loading...</div>)
    if (error) return (<div style={{ color: "white" }}>An error has occurred:</div>)

    console.log(data)

    const match = data[Math.floor(Math.random() * data.length)]

    return (
        <div>
            <Row>
                <Col className="profile_pic">
                    <img src="https://www.placecage.com/200/200" className="mx-auto d-block" />
                </Col>
                <Col className="matched__game-image">
                    <div>
                        <img src="https://www.placecage.com/200/200" className="mx-auto d-block" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="profile_name">
                    <h3>{match.username}</h3>
                </Col>
                <Col className="matched__game-title">
                    <h3>{match.favoriteGame}</h3>
                </Col>
            </Row>
            <Row>
                <Col className="profile_bio">
                    Bio: {match.userBio}
                </Col>
                <Col className="skill_level">
                    Skill Level: {match.skillLevel}
                </Col>
            </Row>
        </div>
    );
}