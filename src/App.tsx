import React from "react";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img
  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW04Z2NseGExNG83Ym10dm9zZmdlenE0ZmRyMHp4OXA4ajJpb2swdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4KhLPrBsGbDHZkRO/giphy.gif"
  alt="Placeholder image"
/>

  <h1>UD CISC275 with React Hooks and TypeScript</h1>
  <p>Dakshi Kaushik</p>
</header>

<ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Bootstrap</li>
            </ul>

         <button
  className="btn btn-primary"
  onClick={() => {
    console.log("Hello World!");
  }}
>
  Log Hello World
</button>

<div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
    <div
        style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red"
        }}
    ></div>
    <div
        style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red"
        }}
    ></div>
</div>



            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
