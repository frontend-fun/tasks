import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Halloween"
    | "Christmas"
    | "St. Patrick's Day"
    | "Thanksgiving"
    | "Easter";
const HOLIDAY_TRANSITIONS_ALPHABET: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "St. Patrick's Day",
    "St. Patrick's Day": "Thanksgiving",
    Thanksgiving: "Christmas",
};
const HOLIDAY_TRANSITIONS_YEAR: Record<Holiday, Holiday> = {
    "St. Patrick's Day": "Easter",
    Easter: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "St. Patrick's Day",
};
const HOLIDAY_EMOJIS: Record<Holiday, string> = {
    Easter: "🐰",
    "St. Patrick's Day": "🍀",
    Halloween: "🎃",
    Thanksgiving: "🦃",
    Christmas: "🎄",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Easter");

    function changeHolidayAlphabet(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_ALPHABET[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayYear(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_YEAR[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <Button onClick={changeHolidayAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeHolidayYear}>Advance by Year</Button>
            <div>Holiday: {HOLIDAY_EMOJIS[holiday]}</div>
        </div>
    );
}
