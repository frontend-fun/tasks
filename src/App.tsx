import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import funnyDog from "./funny dog.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header style={{ backgroundColor: "red" }} className="App-header">
                <h1>This is my header text!!! :P</h1>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <ol>
                <li>First is the worst</li>
                <li> Second is the best</li>
                <li> Third is the one with the treasure chest </li>
            </ol>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Lindsey Spar <br /> Hello World
            </p>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <img
                src={funnyDog}
                alt="A picture of a dachshund with an orange peel on its head."
            />
        </div>
    );
}

export default App;
