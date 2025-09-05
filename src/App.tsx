import React from "react";
import "./App.css";
import paris from "./paris.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

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
            <p>Samita Bomasamudram</p>
            <p> Hello World!!</p>
            <h1>This is a header</h1>
            <img src={paris} alt="Art of Paris" />
            <ul>
                <li>task 1</li>
                <li>task 2</li>
                <li>task 3</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        First column
                        <div
                            style={{
                                width: "10%",
                                height: 20,
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        Second column
                        <div
                            style={{
                                width: "10%",
                                height: 20,
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
