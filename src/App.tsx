import React from "react";
import "./App.css";
import pookie from "./Assets/pookie.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>&quot;Hello World&quot; - Matthew Goldstein</h1>
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            <div
                                style={{
                                    width: 50,
                                    height: 100,
                                    backgroundColor: "red",
                                }}
                            ></div>
                            UD CISC275 with React Hooks and TypeScript
                            <img
                                src={pookie}
                                alt="A picture of my dog Pookie"
                                height={200}
                                width={155}
                            />
                            Pookie^
                        </header>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 50,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                        <p>
                            My Dogs:
                            <ul>
                                <li>Buster</li>
                                <li>Alfalfa</li>
                                <li>Pookie</li>
                                <li>Winston</li>
                            </ul>
                        </p>
                        <div>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
