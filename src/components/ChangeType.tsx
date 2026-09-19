import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function ChangedType(currentType: QuestionType): string {
        return currentType === "short_answer_question" ? "Short Answer" : (
                "Multiple Choice"
            );
    }
    return (
        <div>
            <div>{ChangedType(type)}</div>
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
        </div>
    );
}
