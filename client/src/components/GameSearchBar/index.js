import React, { useState } from "react";
import Atlas from "../../utils/Atlas";
import { Form, Button, Table, Row, Col } from "react-bootstrap";

function GameSearchBar() {
    const [search, setSearch] = useState("");
    const [games, setGames] = useState([])

    const handleInputChange = event => {
        setSearch({ search: event.target.value });
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
                    setGames(res.data.games);
                    console.log(games);
                    games.map(data => (
                        console.log(data.name),
                        console.log(data.id)
                    ))
                }
            })
    };

    return (
        <div className="container">
            <Form>

                <Form.Group controlId="formBasicEmail" >
                    <Form.Control type="input" placeholder="Search" onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                        Search for a board game by name
                </Form.Text>
                </Form.Group>

                <Button type="submit" onClick={handleFormSubmit} style={{ backgroundColor: "black" }}>Search</Button>
            </Form>
            <div>
                <Table responsive variant="dark">
                    {games.map(data => (
                        <tr key={data.id}>
                            <img src={data.images.thumb}></img>
                            <td>{data.name}</td>
                        </tr>
                    ))}
                </Table>
            </div>
        </div>

    )
}



export default GameSearchBar;