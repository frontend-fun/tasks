import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    function changeType() {
        setQuestionType(
            questionType === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }

    return (
        <div>
            <p>
                Current Type:{" "}
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </p>
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}
