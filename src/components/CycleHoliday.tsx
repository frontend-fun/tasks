import React, { useState } from "react";
import { Button } from "react-bootstrap";
/* Holidays - Christmas | Easter | Halloween | Independence Day | Thanksgiving */
type Holidays = "🎄" | "🥚" | "🎃" | "🎇" | "🦃";

export function CycleHoliday(): React.JSX.Element {
    const holiday: Record<Holidays, string> = {
        "🎄": "🥚",
        "🥚": "🎃",
        "🎃": "🎇",
        "🎇": "🦃",
        "🦃": "🎄"
    };
    const holidiayByYear: Record<Holidays, string> = {
        "🥚": "🎇",
        "🎇": "🦃",
        "🦃": "🎃",
        "🎃": "🎄",
        "🎄": "🥚"
    };
    const [currentHoliday, setCurrentHoliday] = useState<Holidays>("🎄");
    function cycleByAlphabet(): void {
        setCurrentHoliday(holiday[currentHoliday] as Holidays);
    }
    function cycleByYear(): void {
        setCurrentHoliday(holidiayByYear[currentHoliday] as Holidays);
    }
    return (
        <div>
            <p>Current Holiday: {currentHoliday}</p>
            <Button onClick={cycleByAlphabet}>Cycle by Alphabet</Button>
            <Button onClick={cycleByYear}>Cycle by Year</Button>
        </div>
    );
}
