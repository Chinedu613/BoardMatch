import React, { useState } from "react";
import Atlas from "../../utils/Atlas";
import {Form, Button} from "react-bootstrap";

function GameSearchBar() {
    const [search, setSearch] = useState("");

    const handleInputChange = event => {
        setSearch({search: event.target.value});
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
        Atlas.searchGames(search)
            .then(res => {
                if (res.data.length === 0) {
                    throw new Error("No results found.");
                }
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                else {
                    console.log(res);
                }
            })
    };
    
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control type="input" placeholder="Search" onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    Search for a board game by name
                </Form.Text>
            </Form.Group>
            <Button type="submit" onClick={handleFormSubmit}>Search</Button>
        </Form>
    )
}



export default GameSearchBar;