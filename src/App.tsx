import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import bigThree from "./assets/images/bigThree.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                UD CISC275 with React Hooks and TypeScript, By Soleil Donfack
            </header>
            <div className="column">
                <h2>Top three Players</h2>
                <ol>
                    <li>Lamine Yamal</li>
                    <li>Kylian Mbappe</li>
                    <li>Erling Haaland</li>
                </ol>
            </div>
            <div className="column">
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <div
                    style={{
                        width: "100px",
                        height: "50px",
                        backgroundColor: "red",
                    }}
                ></div>
            </div>
            <div className="column">
                <img
                    className="images"
                    src={bigThree}
                    alt="A fish mopping the sea"
                />
            </div>
        </div>
    );
}

export default App;
