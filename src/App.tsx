import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { ChangeColor } from "./form-components/ChangeColor";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Wesley Simpson - UD CISC275 with React Hooks and TypeScript
                </h1>
                <img src="/logo192.png" alt="React logo" width="120" />

                <ul>
                    <li>Added a header</li>
                    <li>Added an image with alt text</li>
                    <li>Added a list with three items</li>
                </ul>

                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>

                <Container style={{ marginTop: "16px" }}>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "150px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "150px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </header>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>

            <hr />
            <hr />

            <ChooseTeam></ChooseTeam>
            <hr />

            <ColoredBox></ColoredBox>
            <hr />

            <ShoveBox></ShoveBox>
            <hr />

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
