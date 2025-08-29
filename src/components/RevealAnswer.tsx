import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const toggleAnswer = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <Button onClick={toggleAnswer}>
                {isVisible ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {isVisible && <p style={{ marginTop: "10px" }}>42</p>}{" "}
        </div>
    );
}
