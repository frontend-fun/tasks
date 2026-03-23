import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "black",
    ];

    const [color, setColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            {colors.map((currentColor: string) => (
                <Form.Check
                    inline
                    key={currentColor}
                    type="radio"
                    name="color-choice"
                    id={`color-${currentColor}`}
                    label={currentColor}
                    value={currentColor}
                    checked={color === currentColor}
                    onChange={updateColor}
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
