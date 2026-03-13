import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
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

function App() {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    width="120"
                />
            </header>

            
            <hr />
            <Button onClick={() => { console.log("Hello World!"); }}>
            Log Hello World
            </Button>
            <hr />

            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>

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
        </div>
    );
}

export default App;
