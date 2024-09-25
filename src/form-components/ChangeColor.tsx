import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "orange",
    "green",
    "blue",
    "yellow",
    "purple",
    "pink",
    "cyan",
    "beige",
];

export function ChangeColor(): React.JSX.Element {
    const [theColor, setTheColor] = useState<string>(COLORS[0]);

    function updateTheColor(event: React.ChangeEvent<HTMLInputElement>) {
        setTheColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((element, index) => (
                <Form.Check
                    inline
                    type="radio"
                    name="response"
                    label={element}
                    value={element}
                    checked={theColor === element}
                    onChange={updateTheColor}
                    key={index}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: theColor }}
                    data-testid="colored-box"
                >
                    {theColor}
                </span>
                .
            </div>
        </div>
    );
}
