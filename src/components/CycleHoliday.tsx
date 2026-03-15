import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holidays, setHoliday] = useState<string>("🐲");

    function sortByAlphabet(): void {
        setHoliday(
            holidays === "🐲" ? "🎁"
            : holidays === "🎁" ? "🌎"
            : holidays === "🌎" ? "🍀"
            : holidays === "🍀" ? "💖"
            : "🐲",
        );
    }

    function sortByDate(): void {
        setHoliday(
            holidays === "💖" ? "🐲"
            : holidays === "🐲" ? "🍀"
            : holidays === "🍀" ? "🌎"
            : holidays === "🌎" ? "🎁"
            : "💖",
        );
    }

    return (
        <div>
            Holiday: {holidays}
            <div>
                <Button onClick={sortByAlphabet}>Advance By Alphabet</Button>
                <Button onClick={sortByDate}>Advance By Year</Button>
            </div>
        </div>
    );
}
