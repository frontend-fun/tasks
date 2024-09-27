import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colorArr = [
        "red",
        "orange",
        "yellow",
        "green",
        "cyan",
        "blue",
        "purple",
        "magenta",
        "black",
        "white",
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colorArr.map((c: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check"
                    label={c}
                    key={c}
                    value={c}
                    checked={color === c}
                />
            ))}
            <br></br>
            <span data-testid="colored-box">You have chosen</span>
            <span>{color}</span>
            <span>.</span>
        </div>
    );
}
