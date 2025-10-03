import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );
    function change(): void {
        setQuestion(
            question === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }
    return (
        <div>
            <Button onClick={change}>Change Type</Button>
            {question === "multiple_choice_question" ?
                <span>Multiple Choice</span>
            :   <span>Short Answer</span>}
        </div>
    );
}
