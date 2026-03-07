import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function toggleVisible(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={toggleVisible}>Reveal Answer</Button>
            <div>Answer: {visible && <div>42</div>}</div>
        </div>
    );
}
