import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    function flipShowAnswer(): void {
        setShowAnswer(!showAnswer);
    }
    return (
        <div>
            <button onClick={flipShowAnswer}>Reveal Answer</button>
            {showAnswer && <p>42</p>}
        </div>
    );
}
