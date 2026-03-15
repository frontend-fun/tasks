import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLOR_LIST = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "white",
];
const COLOR_DEFAULT = COLOR_LIST[0];

export function ChangeColor(): React.JSX.Element {
    const [colors, setColors] = useState<string>(COLOR_DEFAULT);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColors(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLOR_LIST.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name={color}
                        value={color}
                        onChange={updateColor}
                        label={color}
                        style={{ backgroundColor: color }}
                        checked={color === colors}
                    />
                ))}
            </div>
            <div style={{ backgroundColor: colors }} data-testid="colored-box">
                {colors}
            </div>
        </div>
    );
}
