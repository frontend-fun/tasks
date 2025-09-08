import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#2d66d8" }}
            >
                <h1>
                    {" "}
                    Jacob Chacko: UD CISC275 with React Hooks and TypeScript
                    Hello World{" "}
                </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <img src="../public/asset/channels4_profile.jpg" alt="76ers logo" />

            <ul>
                <li>first player</li>
                <li>second player</li>
                <li> third player</li>
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
                    <Col
                        style={{
                            width: "20%",
                            backgroundColor: "red",
                            height: "100px",
                        }}
                    >
                        First column.
                    </Col>
                    <Col
                        style={{
                            width: "20%",
                            backgroundColor: "red",
                            height: "100px",
                        }}
                    >
                        Second columnn
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
