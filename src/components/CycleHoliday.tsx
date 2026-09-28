import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "New Year's"
    | "Thanksgiving"
    | "Valentine's";

const HOLIDAY_EMOJI: Record<Holiday, string> = {
    Christmas: "🎄",
    Halloween: "🎃",
    "New Year's": "🎉",
    Thanksgiving: "🦃",
    "Valentine's": "💝",
};

const ALPHABET_ORDER: Record<Holiday, Holiday> = {
    Christmas: "Halloween",
    Halloween: "New Year's",
    "New Year's": "Thanksgiving",
    Thanksgiving: "Valentine's",
    "Valentine's": "Christmas",
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    "New Year's": "Valentine's",
    "Valentine's": "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New Year's",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function advanceByAlphabet(): void {
        setHoliday(ALPHABET_ORDER[holiday]);
    }

    function advanceByYear(): void {
        setHoliday(YEAR_ORDER[holiday]);
    }

    return (
        <div>
            <div>Holiday: {HOLIDAY_EMOJI[holiday]}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
