import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * The CycleHoliday component is a little more complicated, but should be an opportunity to be creative.
 * Think about your 5 favorite holidays, and then find 5 emojis that represent them.
 * You will create two buttons that let you “cycle” through each holiday,
 * one button alphabetically and the other button by time in the year.
 *
 * Ultimately, the holidays you pick are up to you,
 * and we will not micromanage your choice of alphabetization or
 * specific date chosen EXCEPT that the two orderings should not be the same (because that’s no fun).
 *
 * You will need one state, either a string or an enumeration of
 * 5 strings like QuestionType (perhaps named Holiday).
 *
 * You will need to define two functions (or two Records) that can take in an existing holiday and
 * produce the next holiday - one function should produce the next holiday alphabetically,
 * and the other produces the next holiday in the year.
 *
 * The view should render the current holiday with the text Holiday: followed by the emoji (e.g., Holiday: 🎃).
 *
 * The first button should include the text Alphabet somewhere (e.g., Advance by Alphabet)
 * and changes the current holiday to the next one alphabetically.
 *
 * The second button should include the text Year somewhere (e.g., Advance by Year)
 * and changes the current holiday to the next one in the year.
 **/

// const LIGHT_TRANSITIONS: Record<LightColor, LightColor> = {
//     green: "yellow",
//     yellow: "red",
//     red: "green",
// };

/** My Favorite Holidays by Date
 * - Chinese New Year : 🧧
 * - Valentines Day : 💞
 * - Juneteenth : ⛓️‍💥
 * - Halloween : 🎃
 * - Christmas : 🎄
 *
 * Holidays by Alpha
 * Chinese New Year 🧧
 * Christmas 🎄
 * Halloween 🎃
 * Juneteenth ⛓️‍💥
 * Valentine's Day 💞
 *
 */

type Holiday = "🧧" | "💞" | "⛓️‍💥" | "🎃" | "🎄";
const HOLIDAY_TRANSITIONS_BY_DATE: Record<Holiday, Holiday> = {
    "🧧": "💞",
    "💞": "⛓️‍💥",
    "⛓️‍💥": "🎃",
    "🎃": "🎄",
    "🎄": "🧧",
};
const HOLIDAY_TRANSITIONS_BY_ALPHA: Record<Holiday, Holiday> = {
    "🧧": "🎄",
    "🎄": "🎃",
    "🎃": "⛓️‍💥",
    "⛓️‍💥": "💞",
    "💞": "🧧",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");
    function holidayByAlpha(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_BY_ALPHA[holiday];
        setHoliday(newHoliday);
    }
    function holidayByDate(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_BY_DATE[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            Holiday: {holiday}
            <div>
                <Button onClick={holidayByAlpha}>Sort by Alphabet</Button>
            </div>
            <div>
                <Button onClick={holidayByDate}>Sort by Date in Year</Button>
            </div>
        </div>
    );
}
