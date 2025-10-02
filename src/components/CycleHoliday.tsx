import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("New Year's Day: 🍾");
    const holidays: string[] = [
        "Halloween: 🎃",
        "Thanksgiving: 🦃",
        "Christmas: 🎄",
        "New Year's Day: 🍾",
        "Easter: 🐰",
    ];

    const holidayAlph: Record<string, string> = {
        "Christmas: 🎄": "Easter: 🐰",
        "Easter: 🐰": "Halloween: 🎃",
        "Halloween: 🎃": "New Year's Day: 🍾",
        "New Year's Day: 🍾": "Thanksgiving: 🦃",
        "Thanksgiving: 🦃": "Christmas: 🎄",
    };

    function holidayByYear(): void {
        const currentIndex = holidays.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        setHoliday(holidays[nextIndex]);
    }

    return (
        <div>
            <p>current holiday: {holiday}</p>
            <Button
                onClick={() => {
                    setHoliday(holidayAlph[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <p>{holiday}</p>
            <Button onClick={holidayByYear}>Advance by Year</Button>
        </div>
    );
}
