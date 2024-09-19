import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");

    function changeUp(): void {
        if (value === "short_answer_question") {
            setValue("multiple_choice_question");
        } else {
            setValue("short_answer_question");
        }
    }

    return (
        <span>
            <Button onClick={changeUp}>Change Type</Button>
            {value === "multiple_choice_question" ?
                <span>Multiple Choice</span>
            :   <span>Short Answer</span>}
        </span>
    );
}
