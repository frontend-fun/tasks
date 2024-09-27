import React, { useState } from "react";
import { Button } from "react-bootstrap";
interface ShovableBox {
    position: number;
    setPosition: (newPosition: number) => void;
}
function ShoveBoxButton({ position, setPosition }: ShovableBox) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
    return (
        <div>
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position + "px",
                }}
            ></div>
            <h3>Shove Box</h3>
            <span>The box is at: position</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
            </div>
        </div>
    );
}
