import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);  
    const [inProgress, setinProgress]  = useState<boolean>(false)


    return (
        <div>
            <div>
                Current Attempts: <span>{attempt}</span>
                Progess: <span>{inProgress}</span>
            </div>
            <div>
                
                <Button onClick={()=>{setAttempt(attempt - 1);{setinProgress(true);}}} disabled={inProgress || attempt === 0}>Start Quiz</Button> 
                 <Button onClick ={()=>{setAttempt(attempt + 1 )}} disabled = {inProgress} >Mulligan</Button>

                <Button onClick = {() => {setinProgress(false)}} disabled = {!inProgress}>Stop Quiz</Button>

                
            </div>
            
        </div>
    );
}
