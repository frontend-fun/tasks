import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);

    function flipVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            Reveal Answer
            <Button onClick={flipVisibility}>Show/Hide Reveal Answer</Button>
            {!visible && <div>42</div>}
        </div>
    );
}
