import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<string>("❌");

    function inputAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        const val = event.target.value;
        setAnswer(val);
        if (val === expectedAnswer) {
            setIsCorrect("✔️");
        } else {
            setIsCorrect("❌");
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <FormGroup controlId="AnswerBox">
                <FormLabel>Answer</FormLabel>
                <FormControl value={answer} onChange={inputAnswer} />
            </FormGroup>
            <div>{isCorrect}</div>
        </div>
    );
}
