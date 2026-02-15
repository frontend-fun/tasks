import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    const handleButtonClick = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#4a90e2" }}
            >
                <h1>UD CISC275 with React Hooks and TypeScript: Aoun Syed</h1>
            </header>

            <div style={{ padding: "20px" }}>
                <img
                    src="https://via.placeholder.com/300x200"
                    alt="Placeholder image"
                />

                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    My Favorite Things:
                </p>
                <ul>
                    <li>Learning React and TypeScript</li>
                    <li>Building web applications</li>
                    <li>Problem solving with code</li>
                </ul>

                <button className="btn btn-primary" onClick={handleButtonClick}>
                    Log Hello World
                </button>

                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>

                <div
                    style={{ display: "flex", gap: "20px", marginTop: "20px" }}
                >
                    <div
                        style={{
                            width: "150px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                    <div
                        style={{
                            width: "150px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                    <div
                        style={{
                            width: "150px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default App;
