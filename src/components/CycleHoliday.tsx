import React, { useState } from "react";
import { Button } from "react-bootstrap";

//export type Holiday = "🎅" | "🎃" | "🐰" | "🍀" | "🦃";

export function CycleHoliday(): React.JSX.Element {
    //let _holiday: Holiday = "🎅";
    const [holiday, setHoliday] = useState<string>("🎃");
    const nextAlphabetic: Record<string, string> = {
        "🎃": "🎄",
        "🎄": "🎆",
        "🎆": "🍀",
        "🍀": "🦃",
        "🦃": "🎃",
    };

    const nextInYear: Record<string, string> = {
        "🎆": "🍀",
        "🍀": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎆",
    };
    function alphabetic(): void {
        setHoliday(nextAlphabetic[holiday]);
    }
    function byYear(): void {
        setHoliday(nextInYear[holiday]);
    }
    return (
        <div>
            <Button onClick={alphabetic}>Alphabet</Button>
            <Button onClick={byYear}>Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
