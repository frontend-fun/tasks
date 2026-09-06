import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

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
            <p>Brandon Marquez Rojas</p>
            <p>Hello World</p>

            <img
                src="https://a-z-animals.com/media/2021/11/Cool-Types-of-Birds-toucan-1024x535.jpg"
                alt="A colorful toucan bird"
            />

            <h1>Cool Birds</h1>
            <ul>
                <li>Pigeon</li>
                <li>Toucan</li>
                <li>Parrot</li>
            </ul>

            <Button
                onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
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
