import React, { useState } from "react";
import { Button } from "react-bootstrap";

// {position,setPosition,}: {position: number;setPosition: (newPosition: number) => void;}

interface where {
    place: number;
}

function ShoveBoxButton({ shove }: { shove: () => void }) {
    return <Button onClick={shove}>Shove the Box</Button>;
}

function MoveableBox(props: where): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: props.place + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
    // const box = MoveableBox();

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    shove={() => {
                        setPosition(4 + position);
                    }}
                ></ShoveBoxButton>
                <MoveableBox place={position}></MoveableBox>
            </div>
        </div>
    );
}
