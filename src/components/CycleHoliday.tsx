import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "Christmas" | "Easter" | "Halloween" | "New Year" | "Thanksgiving";

const holidays: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    Halloween: "🎃",
    "New Year": "🎉",
    Thanksgiving: "🦃",
};

const alphabetOrder: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "New Year",
    "Thanksgiving",
];

const yearOrder: Holiday[] = [
    "New Year",
    "Easter",
    "Thanksgiving",
    "Halloween",
    "Christmas",
];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    const changeHoliday = (order: Holiday[]): void => {
        const currentIndex = order.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % order.length;
        setHoliday(order[nextIndex]);
    };

    return (
        <div>
            <div>Holiday: {holidays[holiday]}</div>

            <Button
                onClick={() => {
                    changeHoliday(alphabetOrder);
                }}
            >
                Alphabet
            </Button>

            <Button
                onClick={() => {
                    changeHoliday(yearOrder);
                }}
            >
                Year
            </Button>
        </div>
    );
}