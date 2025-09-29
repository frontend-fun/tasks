import React, { useState } from "react";
import type { JSX } from "react";
import { Button } from "react-bootstrap";

type Holiday = "Halloween" | "Christmas" | "New Year" | "Eid" | "Ramadan";

const HOLIDAY_EMOJI: Record<Holiday, string> = {
    Halloween: "🎃",
    Christmas: "🎄",
    "New Year": "🎆",
    Eid: "🕌",
    Ramadan: "🌙",
};

const ORDER_ALPHA: Holiday[] = [
    "Christmas",
    "Eid",
    "Halloween",
    "New Year",
    "Ramadan",
];
const ORDER_YEAR: Holiday[] = [
    "New Year",
    "Ramadan",
    "Eid",
    "Halloween",
    "Christmas",
];

function makeCycleMap(order: Holiday[]): Record<Holiday, Holiday> {
    return order.reduce(
        (acc, cur, idx) => {
            acc[cur] = order[(idx + 1) % order.length];
            return acc;
        },
        {} as Record<Holiday, Holiday>,
    );
}

const NEXT_ALPHA = makeCycleMap(ORDER_ALPHA);
const NEXT_YEAR = makeCycleMap(ORDER_YEAR);

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Halloween");

    return (
        <div>
            <div>Holiday: {HOLIDAY_EMOJI[holiday]}</div>
            <div className="mt-2">
                <Button
                    onClick={() => {
                        setHoliday(NEXT_ALPHA[holiday]);
                    }}
                >
                    Advance by Alphabet
                </Button>{" "}
                <Button
                    onClick={() => {
                        setHoliday(NEXT_YEAR[holiday]);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
