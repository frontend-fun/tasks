import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    // const holidays = [
    //     { name: "Galapagos", emoji: "🐢", month: 8 },
    //     { name: "Beach", emoji: "🏖", month: 7 },
    //     { name: "Snowboarding", emoji: "🏂", month: 1 },
    //     { name: "Mexico", emoji: "🇲🇽", month: 12 },
    //     { name: "Wyoming", emoji: "🇺🇸", month: 4 },
    // ];
    const [holidays, setHolidays] = useState<string>("Galapagos");
    const alphabetically: Record<string, string> = {
        Beach: "Galapagos",
        Galapagos: "Mexico",
        Mexico: "Snowboarding",
        Snowboarding: "Wyoming",
        Wyoming: "Beach",
    };
    const byDate: Record<string, string> = {
        Snowboarding: "Wyoming",
        Wyoming: "Beach",
        Beach: "Galapagos",
        Galapagos: "Mexico",
        Mexico: "Snowboarding",
    };
    function nextAlphabetically(): void {
        setHolidays(alphabetically[holidays]);
    }
    function nextDate(): void {
        setHolidays(byDate[holidays]);
    }
    return (
        <div>
            <Button onClick={nextAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={nextDate}>Advance by Year</Button>
            {holidays === "Beach" ?
                <div>Holiday: 🏖 </div>
            : holidays === "Galapagos" ?
                <div>Holiday: 🐢 </div>
            : holidays === "Mexico" ?
                <div>Holiday: 🇲🇽 </div>
            : holidays === "Snowboarding" ?
                <div>Holiday: 🏂 </div>
            :   <div>Holiday: 🇺🇸 </div>}
        </div>
    );
}
