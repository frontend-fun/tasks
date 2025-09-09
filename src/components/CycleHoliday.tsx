import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday =
    | "👻" //Halloween, October 31st
    | "🎄" //Christmas, December 25th
    | "❌" //Kaixa Day, September 13th
    | "🎉" //New Years' Day, January 1st
    | "🏳️‍⚧️"; //Nonbinary People's Day, July 14th
const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎄": "👻",
    "👻": "❌",
    "❌": "🎉",
    "🎉": "🏳️‍⚧️",
    "🏳️‍⚧️": "🎄",
};
const CHRONO_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎉": "🏳️‍⚧️",
    "🏳️‍⚧️": "❌",
    "❌": "👻",
    "👻": "🎄",
    "🎄": "🎉",
};
export function CycleHoliday(): React.JSX.Element {
    const [Holiday, setHoliday] = useState<Holiday>("👻");
    function changeAlpha(): void {
        const alphaNextHoliday = ALPHABET_TRANSITIONS[Holiday];
        setHoliday(alphaNextHoliday);
    }
    function changeChrono(): void {
        const chronoNextHoliday = CHRONO_TRANSITIONS[Holiday];
        setHoliday(chronoNextHoliday);
    }
    return (
        <div>
            <div>
                <p>Holiday: {Holiday}</p>
            </div>
            <div>
                <Button onClick={changeAlpha}>Next Holiday in Alphabet</Button>
                <Button onClick={changeChrono}>Next Holiday in Year</Button>
            </div>
        </div>
    );
}
