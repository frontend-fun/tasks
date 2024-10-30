import React from "react";
import {Button} from 'react-bootstrap';
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
            </header>
            <Container>
                <Row>
                    <Col>
                        <div style={ {width: '2px', height: '4px' , backgroundColor: 'red'} }>
                            Hello World
                            <ul>
                                <li>Bonjour</li>
                                <li>Hola</li>
                                <li>Ciao</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div style={ {width: '2px', height: '4px' , backgroundColor: 'red'} }>
                            <img src="computerSetup.jpeg" alt="Pink LED computer setup"/>
                            <Button onClick={ () => { console.log("Hello World") } }>Log Hello World</Button>
                        </div>
                    </Col>
                </Row>
        </div>
    );
}

export default App;
