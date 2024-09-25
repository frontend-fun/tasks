import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");
    const [visible, setShortAnswerVisible] = useState<boolean>(true);

    function flipType(): void {
        // Set visible to be the logical opposite of its previous value
        setShortAnswerVisible(!visible);
        if (qType == "short_answer_question") {
            setQType("multiple_choice_question");
        } else {
            setQType("short_answer_question");
        }
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {visible && <div>Short Answer</div>}
            {!visible && <div>Multiple Choice</div>}
        </div>
    );
}
