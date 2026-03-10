import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("black");
    const colors = [
        "black",
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "brown",
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((colorOption) => (
                <Form.Check
                    key={colorOption}
                    inline
                    type="radio"
                    label={colorOption}
                    value={colorOption}
                    checked={color === colorOption}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    color: "white",
                    width: "100px",
                    height: "50px",
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
