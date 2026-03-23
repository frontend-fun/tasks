import React, { useState } from "react";
import Form from "react-bootstrap/Form";

type MultipleChoiceProps = {
    expectedAnswer: string;
    options: string[];
};

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: MultipleChoiceProps): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <Form.Select value={choice} onChange={updateChoice}>
                {options.map((opt: string) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </Form.Select>

            <div>{choice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
