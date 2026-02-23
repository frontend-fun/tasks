import React from "react";
import "./App.css";
import {Button} from 'react-bootstrap';

function App(): React.JSX.Element {
    let fruits: string[] = ["one", "two", "three"];

    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}
            >
                UD CISC275 with React Hooks and TypeScript Nathaniel Black Hello World
                <h1>New Header</h1>;
            </header>

            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Alt text for my image" />
           
        {fruits.map((fruit, index) => <div key={index}>{fruit}</div>)}
        <Button onClick={() => { console.log("Hello World!") }}>Log Hello World</Button>     

        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ul>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}
export default App;
