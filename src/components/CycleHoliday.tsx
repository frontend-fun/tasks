import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = { name: string; year: number };

export function CycleHoliday(): React.JSX.Element {
    const holidays: Holiday[] = [
        { name: "April Fools", year: 2020 },
        { name: "Boxing Day", year: 2021 },
        { name: "Christmas", year: 2022 },
        { name: "Diwali", year: 2023 },
        { name: "Easter", year: 2024 },
    ];

    const [index, setIndex] = useState<number>(0);

    function cycleAlphabet(): void {
        setIndex((index + 1) % holidays.length);
    }

    function cycleYear(): void {
        setIndex((index + 1) % holidays.length);
    }

    return (
        <div>
            <div>Holiday: {holidays[index].name}</div>
            <Button onClick={cycleAlphabet}>Alphabet</Button>
            <Button onClick={cycleYear}>Year</Button>
        </div>
    );
}
