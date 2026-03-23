import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Valentines"
    | "Halloween"
    | "Thanksgiving"
    | "SaintPatricks";

const HOLIDAY_EMOJIS: Record<Holiday, string> = {
    Christmas: "🎄",
    Valentines: "💌",
    Halloween: "👻",
    Thanksgiving: "🦃",
    SaintPatricks: "🍀",
};

const ALPHABET_NEXT: Record<Holiday, Holiday> = {
    Christmas: "Halloween",
    Halloween: "SaintPatricks",
    SaintPatricks: "Thanksgiving",
    Thanksgiving: "Valentines",
    Valentines: "Christmas",
};

const YEAR_NEXT: Record<Holiday, Holiday> = {
    Valentines: "SaintPatricks",
    SaintPatricks: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "Valentines",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, changeh] = useState<Holiday>("Christmas");
    return (
        <div>
            Holiday: {HOLIDAY_EMOJIS[holiday]}
            <div>
                <Button
                    onClick={() => {
                        changeh(ALPHABET_NEXT[holiday]);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        changeh(YEAR_NEXT[holiday]);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
