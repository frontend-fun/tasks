import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftState, setLeftState] = useState<number>(4);
    const [rightState, setRightState] = useState<number>(1);
    function rollLeftDice(): void {
        const newNum = d6();
        setLeftState(newNum);
    }
    function rollRightDice(): void {
        const newNum = d6();
        setRightState(newNum);
    }
    return (
        <div>
            <div>
                <span data-testid="left-die">{leftState}</span>
                <span data-testid="right-die">{rightState}</span>
            </div>
            <div>
                <Button onClick={rollLeftDice}>Roll Left</Button>
                <Button onClick={rollRightDice}>Roll Right</Button>
            </div>
            <div>
                {leftState == rightState && leftState !== 1 ?
                    <p>You Win</p>
                :   <p>Roll Again</p>}
                {leftState == rightState && leftState == 1 ?
                    <p>You Lose</p>
                :   <p>Roll Again</p>}
            </div>
        </div>
    );
}
