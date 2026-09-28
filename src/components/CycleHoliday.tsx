import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🦃" | "💝";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    const nextAlphabetical: Record<Holiday, Holiday> = {
        "🎃": "🎄",
        "🎄": "🎆",
        "🎆": "🦃",
        "🦃": "💝",
        "💝": "🎃",
    };

    const nextYear: Record<Holiday, Holiday> = {
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "💝",
        "💝": "🎆",
        "🎆": "🎃",
    };

    return (
        <span>
            Holiday: {holiday}
            <Button
                onClick={() => {
                    setHoliday(nextAlphabetical[holiday]);
                }}
            >
                Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextYear[holiday]);
                }}
            >
                Year
            </Button>
        </span>
    );
}
