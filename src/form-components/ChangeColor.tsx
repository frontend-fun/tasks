import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group
                    data-testid="colored-box"
                    style={{ backgroundColor: `${color}` }}
                >
                    <Form.Label>Color:</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={color}
                        onChange={updateColor}
                    />
                </Form.Group>
            </div>
            <div>
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    id="color-red"
                    label="red"
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    id="color-blue"
                    label="blue"
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    id="color-green"
                    label="green"
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    id="color-purple"
                    label="purple"
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    id="color-black"
                    label="black"
                    value="black"
                    checked={color === "black"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    id="color-grey"
                    label="grey"
                    value="grey"
                    checked={color === "grey"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    id="color-pink"
                    label="pink"
                    value="pink"
                    checked={color === "pink"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                    id="color-yellow"
                    label="yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
            </div>
        </div>
    );
}
