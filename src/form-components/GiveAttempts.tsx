import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);
    /*function totalAttempts(): void {
        setAttempts(attempts + requested);
    }*/
    function addRequested(): void {
        //const val = event.target.value;
        if (requested) {
            setAttempts(requested + attempts);
        }
        //totalAttempts();
    }
    function useAttempt(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }
    function increaseAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        const val = event.target.value;
        setRequested(parseInt(val));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Button onClick={useAttempt} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={addRequested}>Gain</Button>
            <FormGroup controlId="attempts">
                <FormLabel>Attempts</FormLabel>
                <FormControl
                    type="number"
                    value={requested}
                    onChange={increaseAttempts}
                ></FormControl>
            </FormGroup>
            Attempts left: {attempts}
        </div>
    );
}
