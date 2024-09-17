import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(): React.JSX.Element {
    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <header 
                className="App-header" 
                style={{ 
                    width: '100%', 
                    backgroundColor: '#FF6666', /* Light red for the header */ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: 'calc(10px + 2vmin)', 
                    color: 'white' 
                }}
            >
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <img 
                    src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlM19jdXRlX2NhdF9kcmVhbXlfd2FsbHBhcGVyX2NhcnRvb25faWxsdWlzdHJhdGlvbl9lOTg2ZGQ0NC04Njk0LTQ1MTYtODk5MS1lNjRkYzRlNTYxZjZfMS5qcGc.jpg" 
                    alt="This is a pic of a cat." 
                    style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
                />
                <p>Priyanka Chaudhuri</p>
                <p>Hello World</p>
                <ul>
                    <li>React with TypeScript</li>
                    <li>React Hooks</li>
                    <li>Web Apps</li>
                </ul>
            </header>
            <Container>
                <Row>
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ 
                                width: '100px', 
                                height: '100px', 
                                backgroundColor: '#FF0000', 
                                margin: '10px auto' 
                            }}></div>
                        </div>
                    </Col>
                    <Col>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ 
                                width: '100px', 
                                height: '100px', 
                                backgroundColor: '#FF0000', 
                                margin: '10px auto' 
                            }}></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => { console.log("Hello World!"); }}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will automatically reload.
            </p>
        </div>
    );
}

export default App;