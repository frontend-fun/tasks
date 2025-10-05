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
        "brown",
    ];

    const [color, setColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {COLORS.map((clr) => (
                    <Form.Check
                        inline
                        key={clr}
                        type="radio"
                        name="colorOptions"
                        value={clr}
                        checked={color === clr}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                        label={
                            <span
                                style={{
                                    backgroundColor: clr,
                                    color:
                                        (
                                            clr === "yellow" ||
                                            clr === "pink" ||
                                            clr === "orange"
                                        ) ?
                                            "black"
                                        :   "white",
                                    padding: "3px 8px",
                                    borderRadius: "6px",
                                }}
                            >
                                {clr}
                            </span>
                        }
                    />
                ))}
            </Form>

            <div style={{ marginTop: "10px", fontSize: "18px" }}>
                You have chosen{" "}
                <span
                    style={{
                        backgroundColor: color,
                        color:
                            (
                                color === "yellow" ||
                                color === "pink" ||
                                color === "orange"
                            ) ?
                                "black"
                            :   "white",
                        padding: "3px 8px",
                        borderRadius: "6px",
                    }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
