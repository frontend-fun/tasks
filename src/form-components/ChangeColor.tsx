import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, chooseColor] = useState<string>("red");
    return (
        <div>
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    chooseColor(e.target.value);
                }}
                id="response-red"
                label="red"
                value="red"
                checked={chosenColor === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                color="blue"
                onChange={(e) => {
                    chooseColor(e.target.value);
                }}
                id="response-blue"
                label="blue"
                value="blue"
                checked={chosenColor === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                color="green"
                onChange={(e) => {
                    chooseColor(e.target.value);
                }}
                id="response-green"
                label="green"
                value="green"
                checked={chosenColor === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                color="yellow"
                onChange={(e) => {
                    chooseColor(e.target.value);
                }}
                id="response-yellow"
                label="yellow"
                value="yellow"
                checked={chosenColor === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                color="purple"
                onChange={(e) => {
                    chooseColor(e.target.value);
                }}
                id="response-purple"
                label="purple"
                value="purple"
                checked={chosenColor === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                color="orange"
                onChange={(e) => {
                    chooseColor(e.target.value);
                }}
                id="response-orange"
                label="orange"
                value="orange"
                checked={chosenColor === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                color="cyan"
                onChange={(e) => {
                    chooseColor(e.target.value);
                }}
                id="response-cyan"
                label="cyan"
                value="cyan"
                checked={chosenColor === "cyan"}
            />
            <Form.Check
                inline
                type="radio"
                color="magenta"
                onChange={(e) => {
                    chooseColor(e.target.value);
                }}
                id="response-magenta"
                label="magenta"
                value="magenta"
                checked={chosenColor === "magenta"}
            />
            <div>
                You have chosen
                <span> </span>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
            </div>
        </div>
    );
}
