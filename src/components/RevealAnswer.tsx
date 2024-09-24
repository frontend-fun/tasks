import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <Button onClick={toggleVisibility}>
                {isVisible ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {isVisible && <div>The answer is 42</div>}
        </div>
    );
}
