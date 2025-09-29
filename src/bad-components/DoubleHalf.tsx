import React, { useState } from "react";
import { Button } from "react-bootstrap";

type SetNumber = React.Dispatch<React.SetStateAction<number>>;

function Doubler({ setDhValue }: { setDhValue: SetNumber }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue((v) => v * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setDhValue }: { setDhValue: SetNumber }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue((v) => v / 2);
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
            <Doubler setDhValue={setDhValue} />
            <Halver setDhValue={setDhValue} />
        </div>
    );
}
