import React, { useState } from "react";
import Atlas from "../../utils/Atlas";
import Users from "../../utils/Users";
import { Form, Button, Table } from "react-bootstrap";
import './style.css';

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
                }
            })
    };

    const handleGame = event => {
        const gameTitle = event.target.value;
        Users.updateGame({ game: gameTitle }).then(res => {
            console.log(res);
        })
    }

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
                    <tbody>
                        {games.map(data => (
                            <tr key={data.id}>
                                <td><div className="game_image"><img src={data.images.thumb}></img></div></td>
                                <td><div className="game_name"><h4>{data.name}</h4></div></td>
                                <td><button className="game_favorite" value={data.name} onClick={handleGame}>Set as Favorite</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

    )
}



export default GameSearchBar;