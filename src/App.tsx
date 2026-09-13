import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>React Website Hello World</h1>
            <header className="App-header">
                UD CISC275 with Miracle, React Hooks and TypeScript
            </header>
            <img
                src="https://i.pinimg.com/originals/04/49/f7/0449f715ea3af5947b22a6462bd8d4a0.jpg"
                alt="Maybe they hate me because I'm too good"
                style={{
                    width: "300px",
                    height: "500px",
                    backgroundColor: "red",
                }}
            />
            <div style={{ backgroundColor: "red", padding: "10px" }}></div>
            <div>
                This is <span style={{ color: "red" }}>Miracle</span>
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
                Unordered List:
                <ul>
                    <li>One</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "25px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "25px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
        </div>
    );
}

export default App;
