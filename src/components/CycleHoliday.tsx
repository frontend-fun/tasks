import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    //Holliday list in order chosen: Christmas, New Years Eve, Halloween, Easter, Thanksgiving
    const alphabeticalHolidays = ["🎄", "🐇", "🎃", "🎉", "🦃"];
    const chronologicalHolidays = ["🐇", "🎃", "🦃", "🎄", "🎉"];
    const [currHoliday, changeHoliday] = useState<string>("🎉");

    function cycleAlphabetically(): void {
        let i = alphabeticalHolidays.findIndex(
            (q: string): boolean => q == currHoliday,
        );
        if (i + 1 == alphabeticalHolidays.length) {
            changeHoliday(alphabeticalHolidays[0]);
        } else {
            changeHoliday(alphabeticalHolidays[i + 1]);
        }
    }
    function cycleChronologically(): void {
        let i = chronologicalHolidays.findIndex(
            (q: string): boolean => q == currHoliday,
        );
        if (i + 1 == chronologicalHolidays.length) {
            changeHoliday(chronologicalHolidays[0]);
        } else {
            changeHoliday(chronologicalHolidays[i + 1]);
        }
    }
    return (
        <div>
            <div>Holiday: {currHoliday}</div>
            <Button onClick={cycleAlphabetically}>Advance By Alphabet</Button>
            <Button onClick={cycleChronologically}>Advance Through Year</Button>
        </div>
    );
}
