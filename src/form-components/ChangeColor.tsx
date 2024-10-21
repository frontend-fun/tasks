import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c) => (
                <Form.Check
                    key={c}
                    inline
                    type="radio"
                    name="colors"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                The box is {color}.
            </div>
        </div>
    );
}
