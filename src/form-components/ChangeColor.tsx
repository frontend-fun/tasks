import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    // Step 1: Colors array
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "black",
        "white",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]); 

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    const renderColorOptions = () => {
        return colors.map((color) => (
            <label
                key={color}
                style={{ marginRight: "10px", display: "inline-block" }}
            >
                <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={handleColorChange}
                />
                {color}
            </label>
        ));
    };

    const renderColorBox = () => {
        return (
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: selectedColor === "white" ? "black" : "white", // Adjust text color for visibility
                    padding: "20px",
                    marginTop: "20px",
                    textAlign: "center",
                }}
            >
                You have chosen {selectedColor}.
            </div>
        );
    };

    return (
        <div>
            <h3>Change Color</h3>
            
            {renderColorOptions()}
            
            {renderColorBox()}
        </div>
    );
}

