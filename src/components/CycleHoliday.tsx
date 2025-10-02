import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🦃" | "🎆" | "🎁";

const ALPHABET_ORDER: Record<Holiday, Holiday> = {
    "🎁": "🎄",
    "🎄": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "🎁",
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    "🎆": "🎁",
    "🎁": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎆",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={() => { setHoliday(ALPHABET_ORDER[holiday]); }}>
                Next Alphabetically
            </Button>
            <Button onClick={() => { setHoliday(YEAR_ORDER[holiday]); }}>
                Next in Year
            </Button>
        </div>
    );
}
