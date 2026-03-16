import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

//Initially short_answer_question
export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question")

    function typeText(): void{
        setType(type === "short_answer_question" ? "multiple_choice_question" : "short_answer_question"); 
    }
    return <div>
        <div>
            <Button onClick={typeText}> Change Type</Button>
        </div>
        <div>
            {type === "multiple_choice_question" ? <span> Multiple Choice</span> : <span> Short Answer</span>}
        </div>
    </div>
}
