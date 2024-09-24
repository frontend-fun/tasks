import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "🎃 Halloween"
    | "🎄 Christmas"
    | "🎆 New Year"
    | "🎉 Independence Day"
    | "🦃 Thanksgiving";

const alphabeticalOrder: Holiday[] = [
    "🎃 Halloween",
    "🎄 Christmas",
    "🎆 New Year",
    "🎉 Independence Day",
    "🦃 Thanksgiving",
];

const yearOrder: Holiday[] = [
    "🎆 New Year",
    "🎉 Independence Day",
    "🎃 Halloween",
    "🦃 Thanksgiving",
    "🎄 Christmas",
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] =
        useState<Holiday>("🎃 Halloween");

    function advanceByAlphabet() {
        const currentIndex = alphabeticalOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % alphabeticalOrder.length;
        setCurrentHoliday(alphabeticalOrder[nextIndex]);
    }

    function advanceByYear() {
        const currentIndex = yearOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % yearOrder.length;
        setCurrentHoliday(yearOrder[nextIndex]);
    }

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
