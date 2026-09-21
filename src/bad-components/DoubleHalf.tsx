import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    setDhValue,
}: {
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue((oldValue: number) => 2 * oldValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    setDhValue,
}: {
    setDhValue: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue((oldValue: number) => 0.5 * oldValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue}></Doubler>
            <Halver setDhValue={setDhValue}></Halver>
        </div>
    );
}
