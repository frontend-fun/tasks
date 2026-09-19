import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setShowAnswer(!showAnswer);
                }}
            >
                Reveal Answer
            </Button>
            {showAnswer && <div>42</div>}
        </div>
    );
}
