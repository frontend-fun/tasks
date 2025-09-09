import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "New Year’s Day", emoji: "🎉", month: 1 },
    { name: "Diwali", emoji: "🎇", month: 11, day: 4 },
    { name: "Independence Day", emoji: "🎆", month: 7 },
    { name: "Halloween", emoji: "🎃", month: 10 },
    { name: "Christmas", emoji: "🎄", month: 12 },
];
// Sort alphabetically
const alphabetically = [...holidays].sort((a, b) =>
    a.name.localeCompare(b.name),
);

// Sort holidays by the year
const byYear = [...holidays].sort((a, b) => a.month - b.month);

export function CycleHoliday(): React.JSX.Element {
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    // get holiday alphabetically
    const advanceAlphabetically = () => {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % alphabetically.length,
        );
    };

    // get holiday by year
    const advanceByYear = () => {
        setCurrentHolidayIndex((prevIndex) => (prevIndex + 1) % byYear.length);
    };

    // Get the current holiday index
    const currentHoliday = alphabetically[currentHolidayIndex];
    //const currentHolidayYear = byYear[currentHolidayIndex];

    return (
        <div>
            <h1>Holiday: {currentHoliday.emoji}</h1>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
