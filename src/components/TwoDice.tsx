import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

type DiceState = { left: number; right: number };

export function TwoDice(): React.JSX.Element {
    const [{ left, right }, setDice] = useState<DiceState>({
        left: 1,
        right: 2,
    });

    const isMatch = left === right;
    const isSnakeEyes = isMatch && left === 1;

    function rollLeft(): void {
        setDice((d) => ({ ...d, left: d6() }));
    }

    function rollRight(): void {
        setDice((d) => ({ ...d, right: d6() }));
    }

    return (
        <div>
            <div>Two Dice</div>
            <div>
                <span data-testid="left-die">{left}</span>{" "}
                <span data-testid="right-die">{right}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>{" "}
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {isMatch && <div>{isSnakeEyes ? "You Lose" : "You Win"}</div>}
        </div>
    );
}
