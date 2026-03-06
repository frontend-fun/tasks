import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎏" | "🪔" | "🎃" | "💖";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎏");

    const alphabetical: Record<Holiday, Holiday> = {
        "🎄": "🎏",
        "🎏": "🪔",
        "🪔": "🎃",
        "🎃": "💖",
        "💖": "🎄",
    };

    const byYear: Record<Holiday, Holiday> = {
        "💖": "🎏",
        "🎏": "🎃",
        "🎃": "🪔",
        "🪔": "🎄",
        "🎄": "💖",
    };

    return (
        <div>
            <div>holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(alphabetical[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(byYear[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
