import React, { useState } from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>): void {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <FormGroup controlId="Answer choices">
                <FormLabel>Select your answer:</FormLabel>
                <FormSelect value={choice} onChange={updateAnswer}>
                    {options.map((o: string) => (
                        <option key={o} value={o}>
                            {o}
                        </option>
                    ))}
                </FormSelect>
            </FormGroup>
            <div>{choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
