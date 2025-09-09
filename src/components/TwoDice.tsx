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
    let initialValue = 6;
    let initialValue2 = 1;
    const [leftDie, setLeftDie] = useState<number>(initialValue);
    const [rightDie, setRightDie] = useState<number>(initialValue2);
    return (
        <div>
            <span data-testid="left-die">
                <Button
                    onClick={() => {
                        setLeftDie(d6());
                    }}
                >
                    Roll Left
                </Button>
                {leftDie}
            </span>
            <span data-testid="right-die">
                <Button
                    onClick={() => {
                        setRightDie(d6());
                    }}
                >
                    Roll Right
                </Button>
                {rightDie}
            </span>
            {leftDie === rightDie && leftDie === 1 && <div>Lose</div>}
            {leftDie === rightDie && leftDie !== 1 && <div>Win</div>}
        </div>
    );
}
