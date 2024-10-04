import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    function flipRevealed(): void {
        setRevealed(!revealed);
    }
    return (
        <div>
            <Button onClick={flipRevealed}>Reveal Answer</Button>
            {revealed && <div>42</div>}
        </div>
    );
}
