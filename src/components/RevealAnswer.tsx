import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);
    function reveal_test(): void {
        setReveal(!reveal);
    }
    return (
        <div>
            <Button onClick={reveal_test}>Reveal Answer</Button>
            {reveal && <div>42</div>}
        </div>
    );
}
