import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function toggleType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
        return;
    }

    return (
        <div>
            <Button onClick={toggleType}>Change Type</Button>
            <div>
                Type:{" "}
                {type === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </div>
        </div>
    );
}
