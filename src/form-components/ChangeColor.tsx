import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];
    const [color, setColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color:</h3>
            <Form>
                {colors.map((c: string) => (
                    <Form.Check
                        key={c}
                        value={c}
                        label={c}
                        type="radio"
                        name="color-change"
                        checked={color === c}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    />
                ))}
            </Form>
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
