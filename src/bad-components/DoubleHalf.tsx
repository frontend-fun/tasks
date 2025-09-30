import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => {
                    setDhValue((prevValue) => 2 * prevValue);
                }}
            >
                Double
            </Button>
            <Button
                onClick={() => {
                    setDhValue((prevValue) => 0.5 * prevValue);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
