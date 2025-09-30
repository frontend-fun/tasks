import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🍀" | "🦃";

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎃");

    // Alphabetical order: 🎄, 🎆, 🎃, 🍀, 🦃
    const alphabeticalOrder: Holiday[] = ["🎄", "🎆", "🎃", "🍀", "🦃"];

    // Year order: 🍀 (March), 🎃 (October), 🦃 (November), 🎄 (December), 🎆 (January)
    const yearOrder: Holiday[] = ["🍀", "🎃", "🦃", "🎄", "🎆"];

    const getNextAlphabetical = (holiday: Holiday): Holiday => {
        const currentIndex = alphabeticalOrder.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % alphabeticalOrder.length;
        return alphabeticalOrder[nextIndex];
    };

    const getNextByYear = (holiday: Holiday): Holiday => {
        const currentIndex = yearOrder.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % yearOrder.length;
        return yearOrder[nextIndex];
    };

    const advanceByAlphabet = () => {
        setCurrentHoliday(getNextAlphabetical(currentHoliday));
    };

    const advanceByYear = () => {
        setCurrentHoliday(getNextByYear(currentHoliday));
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
