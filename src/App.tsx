import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from "./assets/cat.jpeg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "navy", color: "white" }}
            >
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Alanna Socha</h1>
            <p>Hello World</p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>Brandy</p>
            <img
                src={img}
                width="300"
                height="400"
                alt="A picture of my cat Brandy"
            />
            <p>Class List</p>
            <ul>
                <li>CISC 260</li>
                <li>CISC 275</li>
                <li>CISC 320</li>
                <li>ENGL 151</li>
            </ul>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "20px",
                }}
            >
                {/* Column 1 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <p>Column 1</p>
                    <div
                        style={{
                            width: "100px",
                            height: "60px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>

                {/* Column 2 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <p>Column 2</p>
                    <div
                        style={{
                            width: "100px",
                            height: "60px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>

                {/* Column 3 */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <p>Column 3</p>
                    <div
                        style={{
                            width: "100px",
                            height: "60px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default App;
