import React from "react";
import "./App.css";
import budgies from "./images/budgies.jpg";
import { Button } from "react-bootstrap";

export function Header(): React.JSX.Element {
    return <h1>This is my header</h1>;
}

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                UD CISC275 with React Hooks and TypeScript. Jacob Donn. Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <h1>This is a header!</h1>
            <img src={budgies} alt="A budgie couple" />
            <div className="List">
                My go-to Dominos order:
                <ul>
                    <li>Pepperoni</li>
                    <li>Sausage</li>
                    <li>Green peppers</li>
                </ul>
            </div>
            <div className="Button">
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
