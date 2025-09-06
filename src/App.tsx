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
            <h1>
                This is{" "}
                <span style={{ color: "red" }}>colored header text</span>.
            </h1>
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
                        <Col>
                            <div
                                style={{
                                    display: "inline-block",
                                    width: "9px",
                                    height: "12px",
                                    backgroundColor: "red",
                                    margin: "13px",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    display: "inline-block",
                                    width: "30px",
                                    height: "80px",
                                    backgroundColor: "red",
                                    margin: "13px",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    display: "inline-block",
                                    width: "80px",
                                    height: "220px",
                                    backgroundColor: "red",
                                    margin: "13px",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>Paragraph Example</p>
            <p>Mohamed Mouhoud</p>
            <p>Hello World</p>

            <div style={{ border: "45px solid #3c6ed1", padding: "2px" }}>
                <p>How are you?</p>
            </div>
            <div>
                <ol>
                    <li>Item</li>
                    <li>Item2</li>
                    <li>Item3</li>
                </ol>
            </div>
            <div></div>
            <div>
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>
                            Second column.
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7an8OUx1gtjGpdEzwn3SMCDWFIGR9sdcXw&s"
                                alt="An image"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
