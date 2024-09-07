import React from "react";
import "./App.css";
import { Button, Container, Col, Row } from "react-bootstrap";
import picture from "./Images/eyes 1.jpg";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h2> Web Application Practice</h2>
                My name is Brishna
            </header>

            <p>Hello World</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
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
            <img src={picture} alt="Reading The Mind In The Eyes Test" />

            <ol>
                <li>Beautiful</li>
                <li>Amazing</li>
                <li>Interesting</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
