import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";
import AI_picture from "./AI_picture.jpeg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Shukria Muhammadi
                <h2>Header</h2>
                <img src={AI_picture} alt="A picture form an AI. " />
                <ol>
                    <li>Great</li>
                    <li>Day</li>
                    <li>Today</li>
                </ol>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                UD CISC275 with React Hooks and TypeScript Hello World
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>

                        <Col>
                            <div
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </header>
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
        </div>
    );
}

export default App;
