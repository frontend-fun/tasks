import React from "react";
import "./App.css";
import image from './Images/IMG_0444.jpg'; 
import {Button, Col, Container, Row} from 'react-bootstrap'

function App(): React.JSX.Element {
    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col
                            style={{
                                width: "100%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        >
                            Column 1
                        </Col>
                        <Col
                            style={{
                                width: "50%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        >
                            Column 2
                        </Col>
                        <Col
                            style={{
                                width: "10%",
                                height: "50%",
                                backgroundColor: "red",
                            }}
                        >
                            Column 3
                        </Col>
                    </Row>
                </Container>
            </div>
            <header className="App-header">
                <h1>UDCISC275 with Reach Hooks and Types by Amy Mendoza</h1>
            </header>
            <center>
                <img src={image} alt="A funny Picture" />
                <ol>
                    <li>Tacos</li>
                    <li>Quesadilla</li>
                    <li>Soup</li>
                </ol>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </center>
        </div>

        // <div className="App">
        //     <header className="App-header">
        //         UD CISC275 with React Hooks and TypeScript - Amy Mendoza
        //     </header>

        //     <p>
        //         Edit <code>src/App.tsx</code> and save. This page will
        //         automatically reload.
        //     </p>
        //     <p>
        //         Hello World!
        //     </p>
        // </div>
    );
}

export default App;
