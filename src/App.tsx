import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1></h1>UM COS420 with React Hooks and TypeScript<h1></h1>
            </header>
            <img
                src="https://images.fineartamerica.com/images/artworkimages/medium/3/letter-s-graffiti-alphabet-s-typography-blue-letter-s-bubble-letter-s-elsayed-atta-transparent.png"
                alt="Placeholder Image"
            />
            <ul>
                <li>React Hooks</li>
                <li>TypeScript</li>
                <li>Component Styling</li>
            </ul>
            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </button>
            <div
                style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor: "red",
                }}
            ></div>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. sany dagher, Hello World
            </p>
        </div>
    );
}

export default App;
