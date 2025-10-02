import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "black",
    ];
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                <Form.Label>Choose a color</Form.Label>
                {COLORS.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        name="color-choice"
                        id={`color-${color}`}
                        label={color}
                        value={color}
                        checked={chosenColor === color}
                        onChange={(e) => {
                            setChosenColor(e.target.value);
                        }}
                        inline
                        style={{
                            backgroundColor: color,
                            color:
                                color === "yellow" || color === "pink" ?
                                    "black"
                                :   "white",
                            padding: "8px 16px",
                            margin: "10px 8px",
                            borderRadius: "3px",
                            display: "inline-block",
                            minWidth: "80px",
                            textAlign: "center",
                        }}
                    />
                ))}
            </Form.Group>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    color:
                        chosenColor === "yellow" || chosenColor === "pink" ?
                            "black"
                        :   "white",
                    padding: "10px",
                    margin: "10px 0",
                    border: "1px solid black",
                    display: "inline-block",
                }}
            >
                You have chosen {chosenColor}
            </div>
        </div>
    );
}
