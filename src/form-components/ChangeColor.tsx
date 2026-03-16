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
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="color-choice"
                        id={`color-${color}`}
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setSelectedColor(event.target.value);
                        }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
