import React from "react";
import "./App.css";
import tree from './assets/tree.jpeg';
import { Col, Container, Row, Button } from "react-bootstrap";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <p>Aarush Goyal</p>
            <p>Hello World</p>
            <Button onClick={
                () => {console.log("Hello World!")}
            }>Log Hello World</Button>
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container className="first-container">
                <Row>
                    <Col style={{backgroundColor: "red"}}>First</Col>
                    <Col>Second</Col>
                </Row>
            </Container>
            <img src={tree} alt="tree"/>
        </div>
    );
}

export default App;
