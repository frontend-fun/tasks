import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Birthday", emoji: "🎂", date: 12 },
    { name: "Diwali", emoji: "🪔", date: 10 },
    { name: "Halloween", emoji: "🎃", date: 10 },
    { name: "New Year's", emoji: "🎆", date: 1 },
    { name: "Thanksgiving", emoji: "🦃", date: 11 },
];
function holidayAlphabetically(currentHoliday: string): string {
    const sortHolidays = holidays.map((h) => h.name).sort();
    const currentIndex = sortHolidays.indexOf(currentHoliday);
    return sortHolidays[(currentIndex + 1) % sortHolidays.length];
}
function holidayByYear(currentHoliday: string): string {
    const sortHolidays = holidays.sort((a, b) => a.date - b.date);
    const currentIndex = sortHolidays.findIndex(
        (h) => h.name === currentHoliday,
    );
    return sortHolidays[(currentIndex + 1) % sortHolidays.length].name;
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("Birthday");

    const currentEmoji =
        holidays.find((h) => h.name === holiday)?.emoji ?? "🎉";

    return (
        <div>
            <h1>Holiday: {currentEmoji}</h1>
            <Button
                onClick={() => {
                    setHoliday(holidayAlphabetically(holiday));
                }}
            >
                Holiday by alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(holidayByYear(holiday));
                }}
            >
                Holiday by year
            </Button>
        </div>
    );
}
