import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🦃" | "🐰";

// Arrays that define the two different orders
const holidaysAlphabetical: Holiday[] = ["🎃", "🎄", "🐰", "🎆", "🦃"];
const holidaysByYear: Holiday[] = ["🐰", "🎆", "🎃", "🦃", "🎄"];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function nextAlphabet(current: Holiday): Holiday {
        const index = holidaysAlphabetical.indexOf(current);
        return holidaysAlphabetical[(index + 1) % holidaysAlphabetical.length];
    }

    function nextByYear(current: Holiday): Holiday {
        const index = holidaysByYear.indexOf(current);
        return holidaysByYear[(index + 1) % holidaysByYear.length];
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(nextAlphabet(holiday));
                }}
            >
                Advance by Alphabet
            </Button>{" "}
            <Button
                onClick={() => {
                    setHoliday(nextByYear(holiday));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
