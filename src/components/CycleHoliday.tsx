import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas");

    const emojis: Record<string, string> = {
        Christmas: "🎄",
        Halloween: "🎃",
        Thanksgiving: "🦃",
        Easter: "🐰",
        "Valentine's Day": "❤️",
    };

    function nextAlphabet() {
        setHoliday(
            holiday === "Christmas" ? "Easter"
            : holiday === "Easter" ? "Halloween"
            : holiday === "Halloween" ? "Thanksgiving"
            : holiday === "Thanksgiving" ? "Valentine's Day"
            : "Christmas",
        );
    }

    function nextYear() {
        setHoliday(
            holiday === "Valentine's Day" ? "Easter"
            : holiday === "Easter" ? "Halloween"
            : holiday === "Halloween" ? "Thanksgiving"
            : holiday === "Thanksgiving" ? "Christmas"
            : "Valentine's Day",
        );
    }

    return (
        <div>
            <p>Holiday: {emojis[holiday]}</p>

            <Button onClick={nextAlphabet}>Advance by Alphabet</Button>

            <Button onClick={nextYear}>Advance by Year</Button>
        </div>
    );
}
