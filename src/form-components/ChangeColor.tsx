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
                    label={c}
                    key={c}
                    value={c}
                    checked={color === c}
                    style={{ backgroundColor: c }}
                />
            ))}
            <br></br>
            <span>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </span>
        </div>
    );
}
