import React from "react";
import lightbulb from "./assets/lightbulb.png";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Hello World Mason Twist UD CISC275 with React Hooks and
                    TypeScript
                </h1>
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <img src={lightbulb} alt="A lightbulb" />

            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>

            <Button
                variant="primary"
                onClick={() => {
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
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>

                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
