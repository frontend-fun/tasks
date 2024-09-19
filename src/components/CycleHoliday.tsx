import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");

    const dateTransitions: Record<string, string> = {
        "🎄": "💖",
        "💖": "☘️",
        "☘️": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
    };

    const alphaTransitions: Record<string, string> = {
        "🎄": "🎃",
        "🎃": "☘️",
        "☘️": "🦃",
        "🦃": "💖",
        "💖": "🎄",
    };

    function advancedYear(): void {
        const newHoliday = dateTransitions[holiday];
        setHoliday(newHoliday);
    }

    function advancedAlpha(): void {
        const newHoliday = alphaTransitions[holiday];
        setHoliday(newHoliday);
    }

    return (
        <span>
            <Button onClick={advancedAlpha}>Advance by alphabet</Button>
            <Button style={{ marginRight: "20px" }} onClick={advancedYear}>
                Advance by year
            </Button>
            Holiday: {holiday}
        </span>
    );
}
