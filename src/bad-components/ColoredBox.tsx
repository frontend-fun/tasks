import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorInterface {
    colorList: string[];
    colIndex: number;
}

// onClick={() => {setColorIndex((1 + colorIndex) % COLORS.length);}}

function ChangeColor({
    colorChange,
}: {
    colorChange: () => void;
}): React.JSX.Element {
    return <Button onClick={colorChange}>Next Color</Button>;
}

function ColorPreview(props: colorInterface): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: props.colorList[props.colIndex],
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
                    colorChange={() => {
                        setColorIndex((1 + colorIndex) % COLORS.length);
                    }}
                ></ChangeColor>
                <ColorPreview
                    colorList={COLORS}
                    colIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
