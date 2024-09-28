import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("red");
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
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    label={color}
                    checked={selectedColor === color}
                    onChange={() => {
                        setSelectedColor(color);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor,
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
