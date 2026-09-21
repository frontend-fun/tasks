import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((option: string) => (
                <Form.Check
                    inline
                    key={option}
                    type="radio"
                    name="colors"
                    id={`color-check-${option}`}
                    label={option}
                    value={option}
                    checked={color === option}
                    onChange={() => {
                        setColor(option);
                    }}
                />
            ))}
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
