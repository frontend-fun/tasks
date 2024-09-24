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
    const [leftDie, setLeftDie] = useState<number>(() => {
        let value = d6();
        let otherValue;
        do {
            otherValue = d6();
        } while (value === otherValue); // Ensure different initial values
        return value;
    });

    const [rightDie, setRightDie] = useState<number>(() => {
        let value;
        do {
            value = d6();
        } while (value === leftDie); // Ensure different initial values
        return value;
    });

    // Function to handle rolling the left die
    const rollLeft = () => {
        setLeftDie(d6());
    };

    // Function to handle rolling the right die
    const rollRight = () => {
        setRightDie(d6());
    };

    // Determine win or lose state
    const isWin = leftDie === rightDie && leftDie !== 1;
    const isLose = leftDie === 1 && rightDie === 1;

    return (
        <div>
            <div>
                <span data-testid="left-die">Left Die: {leftDie}</span>
            </div>
            <div>
                <span data-testid="right-die">Right Die: {rightDie}</span>
            </div>

            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>

            <div>
                {isLose && <div>You Lose! Snake Eyes!</div>}
                {isWin && <div>You Win!</div>}
                {leftDie === rightDie && leftDie !== 1 && (
                    <div>You Matched!</div>
                )}
            </div>
        </div>
    );
}
