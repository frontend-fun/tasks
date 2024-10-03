import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState"; //Deleted DoubleHalfState.tsx

interface DoubleHalfButtonProps {
    setDhValue: (dhValue: number) => void;
    dhValue: number;
}
function Doubler(props: DoubleHalfButtonProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                props.setDhValue(2 * props.dhValue);
            }}
        >
            Double
        </Button>
    );
}
function Halver(props: DoubleHalfButtonProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                props.setDhValue(0.5 * props.dhValue);
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
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
