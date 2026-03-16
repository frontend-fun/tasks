import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
    ];
    const [color, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((currColor: string) => (
                <Form.Check
                    inline
                    key={currColor}
                    type="radio"
                    label={currColor}
                    value={currColor}
                    onChange={updateColor}
                    checked={color === currColor}
                />
            ))}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen{color}
            </span>
        </div>
    );
}
