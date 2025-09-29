import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeQuestionType(): void {
        if (questionType === "multiple_choice_question") {
            setQuestionType("short_answer_question");
        } else {
            setQuestionType("multiple_choice_question");
        }
    }

    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questionType === "multiple_choice_question" ?
                <p>Multiple Choice</p>
            :   <p>Short Answer</p>}
        </div>
    );
}
