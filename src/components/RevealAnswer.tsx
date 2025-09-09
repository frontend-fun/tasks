import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answer, setAnswer] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setAnswer(!answer);
                }}
            >
                Reveal Answer
            </Button>
            {answer && <div>42</div>}
        </div>
    );
}
