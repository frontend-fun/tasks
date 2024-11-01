import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

const QuestionTypes: { [key: string]: QuestionType } = {
    MULT_CHOICE: "multiple_choice_question" as QuestionType,
    SHORT_ANS: "short_answer_question" as QuestionType,
};

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        QuestionTypes.SHORT_ANS,
    );

    const handleChangeType = () => {
        setQuestionType((prevType) =>
            prevType === QuestionTypes.MULT_CHOICE ?
                QuestionTypes.SHORT_ANS
            :   QuestionTypes.MULT_CHOICE,
        );
    };

    return (
        <div>
            <Button onClick={handleChangeType}>Change Type</Button>
            <div>
                {questionType === QuestionTypes.MULT_CHOICE ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}
