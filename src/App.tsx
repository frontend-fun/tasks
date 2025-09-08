import React from "react";
import "./App.css";
import img from "./assets/cello-recital.jpg";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <p>Joshua Maier</p>

            <h2>Hello World</h2>

            <Container fluid="md">
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        First Column. Top Three Animes:
                        <ol>
                            <li>Attack on Titan</li>
                            <li>One Piece</li>
                            <li>Full Metal Alchemist: Brotherhood</li>
                        </ol>
                    </Col>

                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        Second Column.
                        <img
                            src={img}
                            alt="Me getting ready for a cello recital"
                            width="300"
                            height="400"
                        />
                    </Col>
                </Row>
            </Container>

            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
