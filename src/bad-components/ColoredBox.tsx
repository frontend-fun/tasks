import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    setter: () => void;
}

function ChangeColor({ setter }: ChangeColorProps): React.JSX.Element {
    return (
        <Button onClick={setter}>
            Next Color
        </Button>
    );
}

interface ColorPreviewProps {
    color: string;
}

function ColorPreview({ color }: ColorPreviewProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color, 
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const nextColor = () => {
        setColorIndex((1 + colorIndex) % COLORS.length);
    };

    return (
        <div>
            <div style={{ fontWeight: 'bold' }}>Colored Box</div>
           
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                
                <ChangeColor setter={nextColor}></ChangeColor>
                <ColorPreview color={COLORS[colorIndex]}></ColorPreview>
            </div>
        </div>
    );
}