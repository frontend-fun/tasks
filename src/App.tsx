import React from "react";
import "./App.css";
import jimmyImage from "./images/jimmy.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "darkcyan" }}
            >
                UD CISC275 with React Hooks and TypeScript Matias Sayanes
            </header>
            <h1>Header text</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img
                src={jimmyImage}
                alt="photo of a duck from disneyland, I called it Jimmy"
            />
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
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
                            width: "4px",
                            height: "10px",
                            backgroundColor: "red",
                        }}
                    >
                        First column.
                    </Col>
                    <Col
                        style={{
                            width: "4px",
                            height: "10px",
                            backgroundColor: "red",
                        }}
                    >
                        Second column.
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
