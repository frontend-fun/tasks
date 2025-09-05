import React from "react";
import "./App.css";
import eagles from "./images/eagles.png";
import { Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Courtney Chioma
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <p>Hello World</p>
            <h1>Task 3</h1>

            <img
                src={eagles}
                alt="A picture of eagles logo. Go Birds!"
                width={240}
            />

            <ul>
                <li>First Thing</li>
                <li>Second Thing</li>
                <li>Third Thing</li>
            </ul>

            <p>
                This is <span style={{ color: "red" }}>colored text</span>.
            </p>
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>

            <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>

            <Container className="mt-3">
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "120px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "120px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
