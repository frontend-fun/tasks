import React, { useState } from "react";
import { Button } from "react-bootstrap";
interface dhNum {
    setdhValue: (newNum: number) => void;
    num: number;
}
function Doubler({ setdhValue, num }: dhNum): React.JSX.Element {
    return (
        <div>
            <Button
                onClick={() => {
                    setdhValue(2 * num);
                }}
            >
                Double
            </Button>
        </div>
    );
}

function Halver({ setdhValue, num }: dhNum): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setdhValue(0.5 * num);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setdhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setdhValue={setdhValue} num={dhValue}></Doubler>
            <Halver setdhValue={setdhValue} num={dhValue}></Halver>
        </div>
    );
}
