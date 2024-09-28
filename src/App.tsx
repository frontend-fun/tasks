import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeColor } from "./form-components/ChangeColor";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { EditMode } from "./form-components/EditMode";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header style={{ color: "red" }} className="App-header">
                <h1>
                    UD CISC275 with React Hooks and TypeScript. Karanvir Singh
                </h1>
            </header>
            <div>Hello World</div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img src="https://google.com" alt="this is an image of a cat" />
            <ol>
                <li>Wake up</li>
                <li>Brush Teeth</li>
                <li>Shower</li>
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
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
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
            <ChangeColor></ChangeColor>
            <CheckAnswer expectedAnswer={""}></CheckAnswer>
            <EditMode></EditMode>
            <GiveAttempts></GiveAttempts>
            <MultipleChoiceQuestion options={[]} expectedAnswer={""}></MultipleChoiceQuestion>
        </div>
    );
}

export default App;
