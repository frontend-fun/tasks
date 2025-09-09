import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const ALPHABETICAL: Record<HolidayList, HolidayList> = {
        "🐲": "🎁",
        "🎁": "🥚🐇",
        "🥚🐇": "🎃",
        "🎃": "🏳️‍🌈",
        "🏳️‍🌈": "🐲",
    };
    const CHRONOLOGICAL: Record<HolidayList, HolidayList> = {
        "🐲": "🥚🐇",
        "🥚🐇": "🏳️‍🌈",
        "🏳️‍🌈": "🎃",
        "🎃": "🎁",
        "🎁": "🐲",
    };
    type HolidayList = "🎁" | "🥚🐇" | "🐲" | "🎃" | "🏳️‍🌈";
    const [holiday, setHoliday] = useState<HolidayList>("🎁");
    return (
        <div>
            <Button
                onClick={() => {
                    setHoliday(ALPHABETICAL[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(CHRONOLOGICAL[holiday]);
                }}
            >
                Advance by Year
            </Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
