import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [change, setType] = useState<QuestionType>("short_answer_question");
    function setQuestion(): void {
        if (change === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={setQuestion}>Change Type</Button>
            {change === "short_answer_question" && <div>Short Answer</div>}
            {change === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
