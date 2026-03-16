import React, { useState} from "react";
import { Form } from "react-bootstrap";

export const COLORS = ["red", "blue", "green", "yellow", "purple", "orange", "cyan", "magenta"];
export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red")

    function updateColor(event: React.ChangeEvent<HTMLInputElement>){
        setColor(event.target.value)
    }
    return (
        <div>
            {COLORS.map((col: string) => 
                <Form.Check 
                inline
                type = "radio"
                name = "color"
                id = {`color-check-${col}`}
                label = {col}
                value = {col} 
                checked = {col === color}
                onChange = {updateColor}
                key={col}
                accent-color = {col}
             />
             )}
             <div> 
                You have chosen <span data-testid="colored-box" style={{ backgroundColor: color }}>{color}</span>
             </div>
        </div>
    );
}
