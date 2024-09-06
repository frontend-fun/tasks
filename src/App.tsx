import React from "react";
import "./App.css";
import "./assets/images/tiger-blep.png";

export function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 className="Second-header">
                I can make more than one header! Mwhahaha
            </h1>
            <p> </p>
            <Container>
                <Row>
                    <Col>
                        <p>Name: Jared Murray</p>
                        <img
                            src="../assets/images/tiger-blep.png"
                            alt="It me"
                        ></img>
                    </Col>
                    <Col>
                        <p>List of Xenoblade games I have played:</p>
                        <ul>
                            <li>Xenoblade Chronicles 1: Definitive Edition</li>
                            <li>DLC - Futures Connected</li>
                            <li>Xenoblade Chronicles 2</li>
                            <li>DLC - Torna: The Golden Country</li>
                            <li>Xenoblade Chronicles 3</li>
                            <li>DLC - Futures Redeemed</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World{" "}
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <p> </p>
        </div>
    );
}

export default App;
