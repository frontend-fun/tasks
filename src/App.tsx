import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import dogImage from "./assets/dog.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World HARDHIKS UD CISC275 with React Hooks and TypeScript
            </header>

            <h1>First Header</h1>

            <ul>
                <li>Ice cream</li>
                <li>Pizza</li>
                <li>Cookies</li>
            </ul>

            <img src={dogImage} alt="a picture of a dog" />

            <div>
                <Button
                    variant="primary"
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>

            <Container>
                <Row>
                    <Col>
                        <div className="column-content">First column.</div>
                        <div
                            aria-label="red box"
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div className="column-content">Second column.</div>
                        <div
                            aria-label="red box"
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        />
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
