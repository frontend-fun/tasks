import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "☘️" | "🎅" | "🎃" | "🦃" | "🐰";
export function CycleHoliday(): React.JSX.Element {
    const [holidayState, setHoliday] = useState<Holiday>("🎅");
    const ALPHABETIC_TRANSITION: Record<Holiday, Holiday> = {
        "🎅": "🐰",
        "🐰": "🎃",
        "🎃": "☘️",
        "☘️": "🦃",
        "🦃": "🎅",
    };
    const DATE_TRANSITION: Record<Holiday, Holiday> = {
        "☘️": "🐰",
        "🐰": "🎃",
        "🎃": "🦃",
        "🦃": "🎅",
        "🎅": "☘️",
    };
    function changeAlphabet(): void {
        const newAlphabet = ALPHABETIC_TRANSITION[holidayState];
        setHoliday(newAlphabet);
    }
    function changeDate(): void {
        const newDate = DATE_TRANSITION[holidayState];
        setHoliday(newDate);
    }
    return (
        <div>
            <div>
                <span>Holiday: {holidayState}</span>
            </div>
            <div>
                <Button onClick={changeAlphabet}>Advance by Alphabet</Button>
                <Button onClick={changeDate}>Advance by Year</Button>
            </div>
        </div>
    );
}
