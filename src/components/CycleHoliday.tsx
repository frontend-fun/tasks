import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "diwali" | "halloween" | "independence" | "newyear" | "thanksgiving";

const HOLIDAY_EMOJIS: Record<Holiday, string> = {
    diwali: "🪔",
    halloween: "🎃",
    independence: "🎆",
    newyear: "🎉",
    thanksgiving: "🦃"
};

// Alphabetical order: diwali, halloween, independence, newyear, thanksgiving
const ALPHABET_ORDER: Record<Holiday, Holiday> = {
    diwali: "halloween",
    halloween: "independence",
    independence: "newyear",
    newyear: "thanksgiving",
    thanksgiving: "diwali"
};

// Order by time in the year: newyear (Jan), independence (Jul), diwali (Oct/Nov), halloween (Oct), thanksgiving (Nov)
const YEAR_ORDER: Record<Holiday, Holiday> = {
    newyear: "independence",
    independence: "halloween",
    halloween: "diwali",
    diwali: "thanksgiving",
    thanksgiving: "newyear"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("newyear");

    return (
        <div>
            <div>Holiday: {HOLIDAY_EMOJIS[holiday]}</div>
            <Button
                onClick={() => {
                    setHoliday(ALPHABET_ORDER[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(YEAR_ORDER[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
