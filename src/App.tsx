import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript JT
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            This is <span style={{ color: "green" }}> green text</span>
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                {" "}
                this will be surrounded by blue
            </div>
            <h1>header 1?</h1>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
            <img
                src="https://play-lh.googleusercontent.com/NWemNZl1lOc8KQBgIp1hd8io4VMz37uoak0KvtbX_RT6DzRPPdJ5L-sGFJoCr87gTio=w240-h480-rw"
                alt="stock image"
            />
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
                        First Column
                        <div
                            style={{
                                width: "700px",
                                height: "70px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        second column
                        <div
                            style={{
                                width: "700px",
                                height: "70px",
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
