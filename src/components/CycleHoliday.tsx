import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "❤️" | "🐇" | "🎃" | "🍂" | "🎄"; 

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄"); 

    function alphabetical(): void{
        setHoliday(holiday === "🎄" ? "🐇" : holiday === "🐇" ? "🎃" : holiday === "🎃" ? "🍂": holiday === "🍂" ? "❤️" : "🎄" )
    }
    function choronological(): void{
        setHoliday(
            holiday === "❤️" ? "🐇": 
            holiday === "🐇" ? "🎃": 
            holiday === "🎃" ? "🍂": 
            holiday === "🍂" ? "🎄": 
            "❤️");
    }
    return (
        <div>
            <div>
                <p>
                    Holiday: {holiday}
                </p>
            </div>
            <Button onClick={alphabetical}>Advance by Alphabet</Button>
            <Button onClick={choronological}>Advance by Year</Button>
        </div>
    );
}
