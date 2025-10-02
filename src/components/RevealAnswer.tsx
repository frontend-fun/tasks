import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    function reveal(): void {
        setRevealed(!revealed);
    }
    return (
        <div>
            <Button onClick={reveal}>Reveal Answer</Button>
            {revealed && <p>42</p>}
        </div>
    );
}
