import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface Color {
    setColorIndex: (newIndex: number) => void;
    index: number;
}
function ChangeColor({ setColorIndex, index }: Color): React.JSX.Element {
    const [newIndex, setNewIndex] = useState<number[]>([]);
    return (
        <Button
            onClick={() => {
                setColorIndex((index + 1) % COLORS.length);
                setNewIndex([...newIndex, index]);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ index }: Color): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    index={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setColorIndex={setColorIndex}
                    index={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
