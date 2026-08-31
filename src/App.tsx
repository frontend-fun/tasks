import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    UD CISC275 with React Hooks and TypeScript - Zahra Rezaei
                    <br />
                    Hello World
                </h1>
            </header>

            <img src="https://via.placeholder.com/150" alt="Placeholder" />

            <ul>
                <li>Family</li>
                <li>Friends</li>
                <li>Education</li>
            </ul>

            <div
                className="red-rectangle"
                style={{
                    backgroundColor: "red",
                    width: "200px",
                    height: "100px",
                }}
            ></div>

            <Button
                variant="primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
