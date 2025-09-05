import React from "react";
import "./App.css";
import doodlebob from "./images/doodlebob.png";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br />
                Ben Montimurro
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <br />
            <h1>This is doodlebob</h1>
            <img src={doodlebob} alt="doodlebob" />
            <ul className="App-list">
                <li>Doodlebob is dangerous</li>
                <li>Doodlebob was made by spongebob</li>
                <li>Doodlebob uses a pencil to make things come to life</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col
                            style={{
                                height: 300,
                                width: 50,
                                backgroundColor: "red",
                            }}
                        >
                            This is the first column
                        </Col>
                        <Col
                            style={{
                                height: 300,
                                width: 50,
                                backgroundColor: "red",
                            }}
                        >
                            This is the second column
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
