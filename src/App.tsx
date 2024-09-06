import React from "react";
import "./App.css";
import tiger from "./assets/images/tiger-blep.png";
import { Container, Row, Col, Button } from "react-bootstrap";

export function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 className="Second-header">
                I can make more than one header! Mwhahaha
            </h1>
            <p> </p>
            <p>Name: Jared Murray</p>
            <Container>
                <Row>
                    <Col>
                        <img
                            src={tiger}
                            alt="Picture of a Tiger blepping"
                            className="tigerImg"
                        />
                        <p> It me! </p>
                        <div className="col1Rect"></div>
                    </Col>
                    <Col className="xenoList">
                        <p>List of Xenoblade games I have played:</p>
                        <ul>
                            <li>Xenoblade Chronicles 1: Definitive Edition</li>
                            <li>DLC - Futures Connected</li>
                            <li>Xenoblade Chronicles 2</li>
                            <li>DLC - Torna: The Golden Country</li>
                            <li>Xenoblade Chronicles 3</li>
                            <li>DLC - Futures Redeemed</li>
                        </ul>
                        <div className="col2Rect"></div>
                    </Col>
                </Row>
            </Container>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World{" "}
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <p> </p>
        </div>
    );
}

export default App;
