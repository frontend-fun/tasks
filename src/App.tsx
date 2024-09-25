import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import dogPic from "./img/dog_pic.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>This is a header</h1>
                <img
                    src={dogPic}
                    alt="Above is a picture of a dog"
                    width="300"
                    height="300"
                />
                Ordered List:
                <ol>
                    <li>eat</li>
                    <li>class</li>
                    <li>homework</li>
                </ol>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                UM COS420 with React Hooks and TypeScript
                <div
                    style={{
                        width: "50px",
                        height: "100px",
                        backgroundColor: "red",
                    }}
                ></div>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Drew Hello World
            </p>
        </div>
    );
}

export default App;
