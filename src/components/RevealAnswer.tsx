import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    //In order to Show/Hide an answer you need a state to be a boolean showing when to turn off and on 
    const [visible, setVisible] = useState<boolean>(false); //has to be set to false initally so that it's hidden 

    function flipVisibility(): void{
        setVisible(!visible) //sets 'setVisible' to be the logical opposite of the previous value
    }

    return <div><Button onClick = {flipVisibility}>Reveal Answer</Button>{visible && <div>42</div>}</div>;
}
