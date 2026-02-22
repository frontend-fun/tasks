import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Darsh Patel Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <h1 style={{ background: "lightGrey" }}>This is header text</h1>

            <div>
                <img
                    src="../assets/images/pet-ada.jpg"
                    alt="A picture of my dog Ada"
                />
            </div>

            <div>
                Unordered List:
                <ul>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
            </div>

            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>

            <div>
                <Container>
                    <Row>
                        <div
                            style={{
                                width: "650px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        >
                            <Col>First column.</Col>
                        </div>

                        <div
                            style={{
                                width: "650px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        >
                            <Col>Second column.</Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
