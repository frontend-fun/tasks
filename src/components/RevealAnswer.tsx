import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);

    function flipShowAnswer(): void {
        setShowAnswer(!showAnswer);
    }
    return (
        <div>
            <Button onClick={flipShowAnswer}>Reveal Answer</Button>
            {showAnswer && <p>42</p>}
        </div>
    );
}
