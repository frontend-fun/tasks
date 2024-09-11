import React from "react";
import "./App.css";
import doghat from "./doghat.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1>This is a test</h1>
            <img src={doghat} alt="A picture of a dog with a hat" />
            <header style={{ backgroundColor: "red" }} className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>Ethan Fassnacht - name for credit</p>
            <p>Hello World</p>
            <ol>
                <li>this is thing1</li>
                <li>second thing</li>
                <li>thing number 3</li>
                <li>the last thing, thing4</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
