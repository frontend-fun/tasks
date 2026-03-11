import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [text, setText] = useState<string>("Black");

    const colorList = [
        "Black",
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
    ];

    function updateColors(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colorList.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColors}
                    label={color}
                    value={color.toLowerCase()}
                    checked={text.toLowerCase() === color.toLowerCase()}
                    key={color}
                    style={{ backgroundColor: color.toLowerCase() }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: text.toLowerCase() }}
            >
                {text.toLowerCase()}
            </div>
        </div>
    );
}
