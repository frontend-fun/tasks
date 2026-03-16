import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({options, expectedAnswer,}: {options: string[]; expectedAnswer: string;}): React.JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0])

     function updateCurrentChoice(event: React.ChangeEvent<HTMLSelectElement>){
            setCurrentChoice(event.target.value)
        }
    return (
        <div>
            <Form.Group controlId = "multipleChoice"> 
                <Form.Label>Choose an answer</Form.Label>
                <Form.Select value = {currentChoice} onChange={updateCurrentChoice}>
                    {options.map((option: string) => 
                    <option value = {option} key = {option}>{option}</option>)}
                </Form.Select>
            </Form.Group>
            <div>{currentChoice === expectedAnswer ?"✔️": "❌"}</div>
        </div>
    );
}
