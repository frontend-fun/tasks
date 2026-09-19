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
    const [lDie, setL] = useState<number>(1);
    const [rDie, setR] = useState<number>(2);

    return (
        <div>
            <span data-testid="left-die">{lDie}</span>{" "}
            <span data-testid="right-die">{rDie}</span>
            <div>
                <Button
                    onClick={() => {
                        setL(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setR(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {lDie === 1 && rDie === 1 && <div>You Lose</div>}
            {lDie === rDie && lDie !== 1 && <div>You Win</div>}
        </div>
    );
}
