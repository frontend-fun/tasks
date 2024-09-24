import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays: string[] = [
        "christmas",
        "halloween",
        "spring break",
        "happy day",
        "sad day",
    ];
    const [holiday, setHoliday] = useState<string>(holidays[0]);

    const cycleA = (): void => {
        if (holiday == "christmas") {
            setHoliday(holidays[1]);
        } else if (holiday == "halloween") {
            setHoliday(holidays[3]);
        } else if (holiday == "happy day") {
            setHoliday(holidays[4]);
        } else if (holiday == "sad day") {
            setHoliday(holidays[2]);
        } else {
            setHoliday(holidays[0]);
        }
    };

    const cycleb = (): void => {
        if (holiday == "spring break") {
            setHoliday(holidays[3]);
        } else if (holiday == "halloween") {
            setHoliday(holidays[0]);
        } else if (holiday == "happy day") {
            setHoliday(holidays[4]);
        } else if (holiday == "sad day") {
            setHoliday(holidays[1]);
        } else {
            setHoliday(holidays[2]);
        }
    };

    return (
        <div>
            Holiday:
            <span>{holiday == holidays[0] ? "🎄" : null}</span>
            <span>{holiday == holidays[1] ? "🎃" : null}</span>
            <span>{holiday == holidays[2] ? "🛌" : null}</span>
            <span>{holiday == holidays[3] ? "😁" : null}</span>
            <span>{holiday == holidays[4] ? "☹️" : null}</span>
            <div>
                <Button onClick={cycleA}>Advance by Alphabet</Button>
                <Button onClick={cycleb}>Advance by Year</Button>
            </div>
        </div>
    );
}
