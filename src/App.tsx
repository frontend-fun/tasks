import React from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Kate Geiszler</p>
            <p>Hello World</p>
            <h1>Toby the Raccoon</h1>
            <img src="https://shorturl.at/hSriG" alt="A Picture of a Raccoon" />
            <p>Tobys favorites things To Do</p>
            <ul>
                <li>Sudoku</li>
                <li>Eating</li>
                <li>Sleeping</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <div
                    style={{
                        width: "100px",
                        height: "200px",
                        backgroundColor: "red",
                    }}
                ></div>
            </Container>
        </div>
    );
}

export default App;
