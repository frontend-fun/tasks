import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Orange",
        "Purple",
        "Yellow",
        "Pink",
        "Cyan",
    ];

    const [chosenColor, setChosenColor] = useState<string>("Red");

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <label key={color}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={chosenColor === color}
                            onChange={(e) => {
                                setChosenColor(e.target.value);
                            }}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    color:
                        chosenColor.toLowerCase() === "yellow" ?
                            "black"
                        :   "white",
                    padding: "10px",
                    margin: "10px 0",
                    border: "1px solid black",
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
