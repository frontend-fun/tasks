import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <h1> My HTML & CSS Tasks</h1>

            <img
                src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400"
                alt="Funny dog face"
            />
            <ul>
                <li>First iteam</li>
                <li>Second iteam</li>
                <li>Third iteam</li>
            </ul>

            <div
                style={{
                    width: "120px",
                    height: "80px",
                    backgroundColor: "red",
                }}
            />

            <Button
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
            <p>Hello World</p>
            <p>Arivattral Rajkumar</p>
        </div>
    );
}

export default App;
