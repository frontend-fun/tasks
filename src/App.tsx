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
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbubble.com%2Fi%2Fmagnet%2FLETTER-S-BY-ESONE-URBAN-GRAFFITI-STREET-STYLE-by-GraffitiBomberZ%2F87139308.TBCTK&psig=AOvVaw20W4BlnizCeHnI5syDht1E&ust=1741215870936000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJit193E8YsDFQAAAAAdAAAAABAE"
                alt="Placeholder Image"
            />
            <ul>
                <li>React Hooks</li>
                <li>TypeScript</li>
                <li>Component Styling</li>
            </ul>
            <button
                className="btn btn-primary"
                onClick={() => console.log("Hello World!")}>
                Log Hello World
            </button>
            <div style={{width: "100px",height: "50px",backgroundColor: "red",}}></div>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. sany dagher, Hello World
            </p>
        </div>
    );
}

export default App;
