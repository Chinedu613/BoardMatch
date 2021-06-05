import React from 'react';
import { Button } from "react-bootstrap";
import match from '../MatchProfile'

export default function concedeBtn() {
    return (
        <Button onClick={() => match()} variant="danger" style={{marginTop: "20px"}}>Concede</Button>
    );
}