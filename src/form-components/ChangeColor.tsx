import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");
    const colors: string[] = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "black",
        "white",
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }
    return (
        <div>
            {colors.map((color) => (
                <Form.Check
                    inline
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="checkColors"
                    label={color}
                    value={color}
                    checked={chosenColor === color}
                    key={color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    content: chosenColor,
                    backgroundColor: chosenColor,
                    color: "white",
                    height: "50px",
                    width: "50px",
                }}
            >
                You chose {chosenColor}
            </div>
        </div>
    );
}
