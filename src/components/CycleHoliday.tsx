import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🦃" | "🐰";

// Alphabet order transitions
const NEXT_ALPHA: Record<Holiday, Holiday> = {
    "🎃": "🎄",
    "🎄": "🎆",
    "🎆": "🦃",
    "🦃": "🐰",
    "🐰": "🎃",
};

// Year order transitions (different order!)
const NEXT_YEAR: Record<Holiday, Holiday> = {
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎆",
    "🎆": "🐰",
    "🐰": "🎃",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function advanceAlphabet(): void {
        setHoliday((prev) => NEXT_ALPHA[prev]);
    }

    function advanceYear(): void {
        setHoliday((prev) => NEXT_YEAR[prev]);
    }

    return (
        <div>
            <div>Cycle Holiday</div>

            <div>Holiday: {holiday}</div>

            <Button onClick={advanceAlphabet}>Alphabet</Button>
            <Button onClick={advanceYear}>Year</Button>
        </div>
    );
}
