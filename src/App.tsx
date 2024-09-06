import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1> This is the header!</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Layan Almutairi Hello
                World
            </header>
            <img
                src="C:\Users\layan\tasks\src\images\Milan.jpg"
                alt="A picture of my cat Milan"
            />
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            ; Best Players:
            <ul>
                <li> Cristiano Ronaldo</li>
                <li> Otávio Monteiro</li>
                <li> Anderson Talisca</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "25%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "25%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        ></div>
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
