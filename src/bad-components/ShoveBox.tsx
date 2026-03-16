import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface shoveBoxButtonProps {
    position: number;
    setPosition: (newPosition: number) => void;
}

function ShoveBoxButton({ position, setPosition }: shoveBoxButtonProps) {
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

interface movableBoxProps {
    position: number;
}

function MoveableBox({ position }: movableBoxProps): React.JSX.Element {
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
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
    const box = MoveableBox({ position });

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: </span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
