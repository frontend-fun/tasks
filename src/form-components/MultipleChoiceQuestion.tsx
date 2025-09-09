import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    // State to track the currently selected choice
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(e.target.value); // Update state on change
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            {/* Dropdown for selecting an option */}
            <select
                value={selectedChoice} // Bind the selected value to the state
                onChange={handleChange} // Call the handleChange function on change
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/* Display if the answer is correct or incorrect */}
            <div>
                {selectedChoice === expectedAnswer ?
                    "✔️ Correct"
                :   "❌ Incorrect"}
            </div>
        </div>
    );
}
