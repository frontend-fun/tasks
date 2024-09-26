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

    // Step 2: State for the selected color
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]); // Initialize with the first color

    // Step 3: Handle radio button change
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    // Step 4: Render radio buttons
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
                    onChange={handleColorChange} // Use the event handler
                />
                {color}
            </label>
        ));
    };

    // Step 5: Render color display box
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
            {/* Render radio buttons */}
            {renderColorOptions()}
            {/* Render the box that changes color */}
            {renderColorBox()}
        </div>
    );
}
