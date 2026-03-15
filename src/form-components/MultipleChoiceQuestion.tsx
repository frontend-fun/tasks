import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    return (
        <div>
            Multiple Choice Question
            <select
                value={selectedOption}
                onChange={(event) => {
                    setSelectedOption(event.target.value);
                }}
            >
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span style={{ marginLeft: "10px" }}>
                {selectedOption === expectedAnswer ? "✔️" : "❌"}
            </span>
        </div>
    );
}
