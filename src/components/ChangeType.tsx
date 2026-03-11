import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    const [string, setString] = useState<string>("Short Answer");

    function changeState(): void {
        if (questionType === "multiple_choice_question") {
            setQuestionType("short_answer_question");
            setString("Short Answer");
        } else {
            setQuestionType("multiple_choice_question");
            setString("Multiple Choice");
        }
    }

    return (
        <div>
            <Button onClick={changeState}>Change Type</Button> <p>{string}</p>
        </div>
    );
}
