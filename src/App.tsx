import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import rx7 from "./rx7.jpg";

function App(): React.JSX.Element {
    return (
        <div>
            <header className="App-header">
                <span style={{ backgroundColor: "yellow" }}></span>UD CISC275
                with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>
                <span style={{ backgroundColor: "yellow" }}></span>wonky
            </h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Ethan Seifer</p>
            <p>Hello World</p>
            <img src={rx7} alt="A picture of my favorite car" />
            <ol>
                <li>2017 Dodge Viper ACR</li>
                <li>Audi RS6 Avant</li>
                <li>2024 Ram 1500 TRX</li>
            </ol>
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
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 25,
                                height: 30,
                            }}
                        >
                            {" "}
                        </span>
                    </Col>
                    <Col>
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 25,
                                height: 30,
                            }}
                        >
                            {" "}
                        </span>
                    </Col>
                    <Col>
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 25,
                                height: 30,
                            }}
                        >
                            {" "}
                        </span>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
