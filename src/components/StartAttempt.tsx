import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [lives, setLives] = useState<number>(4);
    const [playing, setPlaying] = useState<boolean>(false);

    function changeSt(): void {
        setPlaying(!playing);
        if (!playing) {
            setLives(lives - 1);
        }
    }

    function addLife(): void {
        setLives(lives + 1);
    }

    return (
        <span>
            <Button disabled={playing || lives === 0} onClick={changeSt}>
                Start Quiz
            </Button>
            <Button disabled={!playing} onClick={changeSt}>
                Stop Quiz
            </Button>
            <Button disabled={playing} onClick={addLife}>
                Mulligan
            </Button>
            <span>Lives: {lives}</span>
        </span>
    );
}
