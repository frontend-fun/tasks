import React from "react";
import "./App.css";
import AI_picture from "./AI_picture.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Shukria Muhammadi
                <img src={AI_picture} alt="A picture form an AI. " />
                <ol>
                    <li>Great</li>
                    <li>Day</li>
                    <li>Today</li>
                </ol>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                UD CISC275 with React Hooks and TypeScript Hello World
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>

                        <Col>
                            <div
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <h2>Header</h2>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
