import React from "react";
import "./App.css";
import pokemon from "./pokemon.jpg";
import { Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";

export function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>This is header text</h1>
            <img
                src={pokemon as string}
                alt="POKEMON"
                style={{ width: "200px", height: "auto" }}
            />
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Created by Vance Longo. Hello World</p>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
