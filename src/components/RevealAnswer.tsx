import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [reveal, setReveal] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => { setReveal(!reveal); }}>
                {reveal ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {reveal && <div>The answer is 42</div>}
        </div>
    );
}
