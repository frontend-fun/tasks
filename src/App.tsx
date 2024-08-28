import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <>
            <h1>
                <span style={{ color: "red", border: '1px solid red', padding: '4px'}}>MY FIRST HOMEWORK </span>
                <ol>
                    <li>get A</li>
                    <li>Become a Software Engineer</li>
                    <li>study hard</li>
                </ol>
                <img src="public\logo192.png" alt="A picture" />
                <div className="App">
                    <header className="App-header">
                        UD CISC275 with React Hooks and TypeScript ZhihuaSun HHH
                        Hello World
                    </header>
                    <p>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload.
                    </p>
                </div>
            </h1>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </>
    );
}

export default App;
