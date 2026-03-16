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
    const [leftNum, setLeftNum] = useState<number>(2); 
   
     
    const [rightNum, setRightNum] = useState<number>(1); 
    

    return (
        <div>
            <div>
                Left Die: <span data-testid="left-die">{leftNum}</span>
                Right Die: <span data-testid="right-die">{rightNum}</span>
            </div>
            <div>
                <Button onClick = {() => {setLeftNum(d6())}} >Roll Left</Button>
                <Button onClick = {() =>{setRightNum(d6())}}>Roll Right</Button>
            </div>
            <div>
                {leftNum === rightNum && leftNum === 1  && (
                    <p>Lose</p>
                )}

                {leftNum === rightNum && leftNum !== 1  && (
                    <p>Win</p>
                )}
            </div>
        </div>
    );
}
