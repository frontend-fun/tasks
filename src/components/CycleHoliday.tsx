import React, { useState } from "react";
import { Button } from "react-bootstrap";

type emojis = "🎉" | "🖤" | "🍀" | "🐰" | "🌮" | "⚫️";
// New Years Day, Black History Month, St. Patrick's Day, Easter, Cinco de Mayo, Juneteenth

const holidays_by_month: Record<emojis, emojis> = {
    "🎉": "🖤",
    "🖤": "🐰",
    "🐰": "🌮",
    "🌮": "⚫️",
    "⚫️": "🎉",
    "🍀": "🎉", // Added missing key
};

const holidays_by_alphabet: Record<emojis, emojis> = {
    "🖤": "🌮",
    "🌮": "🐰",
    "🐰": "🎉",
    "🎉": "⚫️",
    "⚫️": "🖤",
    "🍀": "🖤", // Added missing key
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<emojis>("🎉");

    function changeByMonth(): void {
        const newMonth = holidays_by_month[holiday];
        setHoliday(newMonth);
    }
    function changeByAlphabet(): void {
        const newLetter = holidays_by_alphabet[holiday];
        setHoliday(newLetter);
    }

    return (
        <div>
            Cycle Holiday
            <Button onClick={changeByAlphabet}>Advance By Alphabet</Button>
            <Button onClick={changeByMonth}>Advance By Month/Year</Button>
            Holiday: {holiday}
        </div>
    );
}
