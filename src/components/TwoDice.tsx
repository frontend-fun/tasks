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
    const [leftNumber, setLeftNumber] = useState<number>(1);
    const [rightNumber, setRightNumber] = useState<number>(1);

    // Function to simulate rolling the dice
    const rollDice = () => Math.floor(Math.random() * 6) + 1;

    // Update left die only on button click
    const handleRollLeft = () => {
        setLeftNumber(rollDice());
    };

    // Update right die only on button click
    const handleRollRight = () => {
        setRightNumber(rollDice());
    };

    return (
        <div>
            <div data-testid="left-die">{leftNumber}</div>
            <div data-testid="right-die">{rightNumber}</div>
            <button onClick={handleRollLeft}>Roll Left</button>
            <button onClick={handleRollRight}>Roll Right</button>
        </div>
    );
}
