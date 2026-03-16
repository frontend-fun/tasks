import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questType, setQuestType] = useState<QuestionType>(
        "short_answer_question",
    );

    const changeType = (): void => {
        setQuestType(
            questType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    };

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {questType === "short_answer_question" && "Short Answer"}
            {questType === "multiple_choice_question" && "Multiple Choice"}
        </div>
    );
}
