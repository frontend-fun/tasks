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
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Aman Meesala UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p>Hello World</p>
            <img
                src="https://imgs.search.brave.com/BTKrPhmsFPavO4pAsHeQk3X2GB9Vf79xeJnD8Qs4Hxs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/Mzg1MjQzNC9waG90/by9mcmVzaGx5LWJh/a2VkLWJyZWFkLW9u/ZS1vZi1saWZlcy1z/aW1wbGVzdC1wbGVh/c3VyZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVF5OW1x/N1hub2pGbjRTQWlO/R3N6NVZNcS1DelhK/VzJBc1lMWWVzUy1p/Rjg9"
                alt="bread alert"
            />
            <p>Nicknames for Cash</p>
            <ol>
                <li>Buns</li>
                <li>Green</li>
                <li>Dough</li>
            </ol>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>

            <Container>
                <Row>
                    <Col>
                        First column.
                        <div
                            style={{ backgroundColor: "red", padding: "100px" }}
                        ></div>
                    </Col>
                    <Col>
                        Second column.
                        <div
                            style={{ backgroundColor: "red", padding: "8px" }}
                        ></div>
                    </Col>
                </Row>
            </Container>

            <div>{<DoubleHalf></DoubleHalf>}</div>

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
            {/* <DoubleHalf></DoubleHalf> */}
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
        </div>
    );
}

export default App;
