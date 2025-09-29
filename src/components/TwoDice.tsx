import React, { useState } from "react";
import type { JSX } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(2);

    const equal = left === right;
    const snakeEyes = left === 1 && right === 1;

    return (
        <div>
            <div>
                <span data-testid="left-die">Left: {left}</span>{" "}
                <span data-testid="right-die">Right: {right}</span>
            </div>
            <div className="mt-2">
                <Button
                    onClick={() => {
                        setLeft(d6());
                    }}
                >
                    Roll Left
                </Button>{" "}
                <Button
                    onClick={() => {
                        setRight(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            <div className="mt-2">
                {equal && (snakeEyes ? <div>Lose</div> : <div>Win</div>)}
            </div>
        </div>
    );
}
