import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);
    function flipReveal(): void {
        setReveal(!reveal);
    }
    return (
        <div>
            <Button onClick={flipReveal}>Reveal Answer</Button>
            {reveal && <div>42</div>}
        </div>
    );
}
