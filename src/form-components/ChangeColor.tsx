import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "cyan",
    "gray",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c: string) => (
                <Form.Check
                    inline
                    key={c}
                    type="radio"
                    name="color-choice"
                    id={`color-${c}`}
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        { setColor(event.target.value); }
                    }
                />
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: color, padding: "8px" }}
            >
                {color}
            </div>
        </div>
    );
}
