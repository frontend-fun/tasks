import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <Form.Label>Change Color</Form.Label>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="change-color"
                        id={`change-color-${color}`}
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={updateColor}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    display: "inline-block",
                    padding: "8px",
                    marginTop: "8px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
