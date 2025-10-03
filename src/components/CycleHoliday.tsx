import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "Christmas"
        | "NewYear"
        | "ThanksGiving"
        | "Birthday"
        | "Valentines";
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    function nextHolidayAlphabet(): void {
        setHoliday(
            holiday === "Birthday" ? "Christmas"
            : holiday === "Christmas" ? "NewYear"
            : holiday === "NewYear" ? "ThanksGiving"
            : holiday === "ThanksGiving" ? "Valentines"
            : "Birthday",
        );
    }
    function emoji(): string {
        return (
            holiday === "NewYear" ? "🎆"
            : holiday === "Valentines" ? "💖"
            : holiday === "ThanksGiving" ? "🦃"
            : holiday === "Christmas" ? "🎄"
            : "🎂"
        );
    }
    function nextHolidayYear(): void {
        setHoliday(
            holiday === "NewYear" ? "Valentines"
            : holiday === "Valentines" ? "ThanksGiving"
            : holiday === "ThanksGiving" ? "Christmas"
            : holiday === "Christmas" ? "Birthday"
            : "NewYear",
        );
    }
    return (
        <div>
            <span>Holiday: {emoji()}</span>
            <Button onClick={nextHolidayAlphabet}>Alphabet cycle</Button>
            <Button onClick={nextHolidayYear}>Year cycle</Button>
        </div>
    );
}
