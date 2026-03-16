import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);

    function rollLeft(): void {
        setLeft(d6());
    }

    function rollRight(): void {
        setRight(d6());
    }

    return (
        <div>
            <span data-testid="left-die">{left}</span>
            <span data-testid="right-die">{right}</span>

            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>

            {left === right && left === 1 && <div>Lose</div>}
            {left === right && left !== 1 && <div>Win</div>}
        </div>
    );
}
