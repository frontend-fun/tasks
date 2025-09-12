import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const imgSrc =
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hamad AlJneibi CISC275</h1>
            </header>

            <div style={{ marginTop: 12 }}>
                <img src={imgSrc} alt="UAE Flag" />
            </div>

            <div style={{ marginTop: 12 }}>
                <p>Hobbies:</p>
                <ul>
                    <li>Travelling</li>
                    <li>Hiking</li>
                    <li>HorseRiding</li>
                </ul>
            </div>

            <div style={{ marginTop: 12 }}>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>

            <div style={{ marginTop: 16 }}>
                <Container>
                    <Row>
                        {/* First column */}
                        <Col>
                            <div
                                style={{
                                    width: "100%",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                        {/* Second column */}
                        <Col>
                            <div
                                style={{
                                    width: "100%",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
