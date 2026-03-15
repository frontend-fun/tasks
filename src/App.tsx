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
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
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
            <Container>
                <Row>
                    <div style={{ backgroundColor: "red" }}>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <header
                                className="App-header"
                                style={{ backgroundColor: "purple" }}
                            >
                                UD CISC275 with React Hooks and TypeScript By
                                Valerie Owens + Hello World
                            </header>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <p>
                                Edit <code>src/App.tsx</code> and save. This
                                page will automatically reload.
                            </p>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <h1
                                className="App-header"
                                style={{ backgroundColor: "blue" }}
                            >
                                Dab on the h8rs
                            </h1>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <img
                                src={gothfield}
                                alt="Garfield dressed in goth"
                            />
                            <p>Reasons Garfield would be a bad husband:</p>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <ul>
                                <li>He is a cat</li>
                                <li>He is lazy</li>
                                <li>He does not pay taxes</li>
                            </ul>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "10px",
                                    height: "7px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default App;
