import React, { useState, JSX } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    function toggleType(): void {
        setQType(
            qType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <Button onClick={toggleType}>Change Type</Button>
            {qType === "short_answer_question" && <div>Short Answer</div>}
            {qType === "multiple_choice_question" && <div>Multiple Choice</div>}
        </div>
    );
}
