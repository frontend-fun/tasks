import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    function showThem(): void {
        if (value === 42) {
            setValue(0);
        } else {
            setValue(42);
        }
    }

    return (
        <span>
            <Button onClick={showThem}>Reveal Answer</Button>
            {value === 42 && <span>{value}</span>}
        </span>
    );
}
