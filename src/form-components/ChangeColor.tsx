import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "pink",
    ];
    const [selectedColor, setSelectedColor] = useState<string>("red");
    return (
        <div>
            Change Color
            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        name="color"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={(event) => {
                            setSelectedColor(event.target.value);
                        }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "20px",
                    marginTop: "10px",
                    textAlign: "center",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
