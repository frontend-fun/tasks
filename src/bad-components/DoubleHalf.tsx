import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ times2 }: { times2: () => void }): React.JSX.Element {
    return <Button onClick={times2}>Double</Button>;
}

function Halver({
    timesOneHalf,
}: {
    timesOneHalf: () => void;
}): React.JSX.Element {
    return <Button onClick={timesOneHalf}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler
                times2={() => {
                    setDhValue(dhValue * 2);
                }}
            ></Doubler>
            <Halver
                timesOneHalf={() => {
                    setDhValue(dhValue * 0.5);
                }}
            ></Halver>
        </div>
    );
}
