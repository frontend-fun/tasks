import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Hello World! Nicholas Farraj</p>
            <h1>This is a header!</h1>
            <img
                src="data:image/jpeg;base64,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"
                alt="This is a picture of a computer."
            />
            <ul>
                <li>1. LeBron</li>
                <li>2. Jordan</li>
                <li>3. Kobe</li>
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
                        <div
                            style={{
                                width: "50px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "50px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
