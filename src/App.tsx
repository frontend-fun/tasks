import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import dog from "./dog.jpg"


function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <h1> This is header text</h1>
            <p>Angel Jose</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World!</p>
            
      <img src={dog} alt="Dog" />


            <ol>
                <li>golden retriever </li>
                <li>poodle </li>
                <li>german shepard </li>
            </ol>
            <Button>Hello World!</Button>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        First column.
                        <div
                            style={{
                                width: "50px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column.
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
            This is <span style={{ color: "red" }}>colored text </span>
        </div>
    );
}
export default App;
