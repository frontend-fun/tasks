import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎄" | "🎆" | "🎃" | "🇺🇸" | "🦃";
    const holidaysAlphabet: Record<Holiday, Holiday> = {
        "🎄": "🎆",
        "🎆": "🎃",
        "🎃": "🇺🇸",
        "🇺🇸": "🦃",
        "🦃": "🎄",
    };
    const holidaysYear: Record<Holiday, Holiday> = {
        "🇺🇸": "🎆",
        "🎆": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🇺🇸",
    };
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    const changeAlphabetically = (): void => {
        // setHoliday(holidaysAlphabet[holiday]);
        const newHoliday = holidaysAlphabet[holiday];
        setHoliday(newHoliday);
    };

    const changeYearly = (): void => {
        const newHoliday = holidaysYear[holiday];
        setHoliday(newHoliday);
    };

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={changeAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={changeYearly}>Advance by Year</Button>
        </div>
    );
}
