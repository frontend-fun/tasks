import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>

            <div>
                {COLORS.map((option) => (
                    <Form.Check
                        key={option}
                        inline
                        type="radio"
                        label={option}
                        name="color"
                        value={option}
                        checked={color === option}
                        onChange={(event) => {
                            setColor(event.target.value);
                        }}
                    />
                ))}
            </div>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                }}
            >
                {color}
            </div>
        </div>
    );
}
