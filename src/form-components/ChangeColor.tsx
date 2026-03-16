import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan",
    ];

    function changeColor(event: React.ChangeEvent<HTMLInputElement>): void {
        console.log(event.target.value);
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            {colors.map((c) => (
                <FormCheck
                    key={c}
                    inline
                    type="radio"
                    name="color-choices"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={changeColor}
                />
            ))}

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
