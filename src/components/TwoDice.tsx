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
    const getInitialDiceValues = () => {
        let left = d6();
        let right = d6();
        while (left === right) {
            right = d6(); // Regenerate right value until it's different
        }
        return [left, right];
    };

    // Use the function to set the initial state
    const [leftNumber, setLeftNumber] = useState<number>(
        getInitialDiceValues()[0],
    );
    const [rightNumber, setRightNumber] = useState<number>(
        getInitialDiceValues()[1],
    );
    const [message, setMessage] = useState<string>("");

    // Update left die only on button click
    const handleRollLeft = () => {
        const newValue = d6();
        setLeftNumber(newValue);
        checkGameStatus(newValue, rightNumber);
    };

    // Update right die only on button click
    const handleRollRight = () => {
        const newValue = d6();
        setRightNumber(newValue);
        checkGameStatus(leftNumber, newValue);
    };

    // Check for win/loss conditions
    const checkGameStatus = (left: number, right: number) => {
        if (left === 1 && right === 1) {
            setMessage("Lose: Snake Eyes!");
        } else if (left === right) {
            setMessage("Win: Matching Dice!");
        } else {
            setMessage(""); // Clear message if no condition met
        }
    };

    return (
        <div>
            <div data-testid="left-die">{leftNumber}</div>
            <div data-testid="right-die">{rightNumber}</div>
            <button onClick={handleRollLeft}>Roll Left</button>
            <button onClick={handleRollRight}>Roll Right</button>
            {message && <div>{message}</div>}
        </div>
    );
}
