import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "./ryu.jpg";
function App(): React.JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <h1>
                    Here is another header in case the last one did not count
                </h1>
                <p>Featuring special guest Ray Fischer! Hello World</p>

                <p>See you in Street Fighter 5, everybody!</p>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div
                style={{
                    backgroundColor: "red",
                    width: "10px",
                    height: "8px",
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            <p>
                                Hey everybody! It&#39;s me, Ryu from Streets! my
                                favorite things are:
                            </p>
                            <ul>
                                <li>Jumping into standing fierce</li>
                                <li>The newest season of The Simpsons</li>
                                <li>Aaaaand dirt</li>
                            </ul>
                            <img src={logo} alt="Ryu from Street Fighter" />
                            <p>See you in Street Fighter 5, everybody!</p>
                        </Col>
                        <Col>
                            <p>not much going on down here</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
