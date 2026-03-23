import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState("red");
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="color-choice"
                    value={color}
                    checked={chosenColor === color}
                    onChange={(event) => {
                        setChosenColor(event.target.value);
                    }}
                    label={
                        <span
                            style={{
                                backgroundColor: color,
                            }}
                        >
                            {color}
                        </span>
                    }
                />
            ))}
            <div>
                You have chosen{" "}
                <span>
                    <div
                        data-testid="colored-box"
                        style={{ backgroundColor: chosenColor }}
                    >
                        {chosenColor}
                    </div>
                </span>
            </div>
        </div>
    );
}
