import React from "react";
import "./App.css";
import img from "./MyImage.jpg";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <img src={img} alt="something probably cool" />
            <h1 className="heading">SECOND HEADER!</h1>
            <ol>
                <li>first on the list</li>
                <li>second on the list</li>
                <li>third on the list</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div className="App">
                <Container fluid="lg">
                    <Row>
                        <Col
                            md={4}
                            //className="bg-danger"
                            style={{ height: "500px", backgroundColor: "red" }}
                        ></Col>
                        <Col
                            md={{ span: 4, offset: 4 }}
                            //className="bg-danger"
                            style={{ height: "500px", backgroundColor: "red" }}
                        ></Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Connor Unruh. Hello World.
            </p>
        </div>
    );
}

export default App;
