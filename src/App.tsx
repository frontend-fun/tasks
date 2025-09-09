import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./App.css";

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
            <div className="textstuff">
                <h1>Important Stuff Below!</h1>
            </div>
            <div></div>
            <div>
                <span style={{ color: "red" }}>:D</span>.
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div style={{ border: "10px solid red", padding: "4px" }}>
                <Container>
                    <Row>
                        <Col>
                            Ordered List:
                            <ol>
                                <li>Made by Jonathan Liss</li>
                                <li>Hello World</li>
                                <li>Something big on the right</li>
                            </ol>
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                    marginTop: "10px",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9g8cqYMEkgR04UAT-r3D9R4QB2uwpuizRqQ&s"
                                alt="A picture of a big pig"
                            />
                            <div
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundColor: "red",
                                    marginTop: "10px",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
