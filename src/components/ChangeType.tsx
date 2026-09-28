import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <span>
            <Button
                onClick={() => {
                    setType(
                        type === "short_answer_question" ?
                            "multiple_choice_question"
                        :   "short_answer_question",
                    );
                }}
            >
                Change Type
            </Button>

            {type === "multiple_choice_question" ?
                "Multiple Choice"
            :   "Short Answer"}
        </span>
    );
}
