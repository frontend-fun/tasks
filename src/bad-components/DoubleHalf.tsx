import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    value: number;
    setNumber: (newValue: number) => void;
}
function Double({ value, setNumber }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button onClick={() => { setNumber(2 * value); }}>
            Double
        </Button>
    );
}

function Halve({ value, setNumber }: DoubleHalfProps): React.JSX.Element {
    return (
        <Button onClick={() => { setNumber(0.5 * value); }}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            
            <Double value={value} setNumber={setValue} />
            <Halve value={value} setNumber={setValue} />
        </div>
    );
}