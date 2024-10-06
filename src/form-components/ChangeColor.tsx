import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Choose a color:</h3>

            {/* Render radio buttons for each color using map */}
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    label={color}
                    value={color}
                    name="color-options"
                    checked={selectedColor === color}
                    onChange={handleColorChange}
                    style={{ marginRight: "10px" }}
                />
            ))}

            {/* Box with the selected color and background */}
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: selectedColor,
                    color: "white",
                    width: "100px",
                    textAlign: "center",
                }}
            >
                {selectedColor} box
            </div>
        </div>
    );
}
