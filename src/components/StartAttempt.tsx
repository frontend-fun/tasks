import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function decreaseAttempts(): void {
        const newAttempts = attempts - 1;
        setAttempts(newAttempts);
        setProgress(!progress);
    }
    function increaseAttempts(): void {
        const increased = attempts + 1;
        setAttempts(increased);
    }
    return (
        <div>
            <Button
                onClick={decreaseAttempts}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={increaseAttempts}
                disabled={progress || attempts === 0}
            >
                Mulligan
            </Button>
            <div>{attempts}</div>
        </div>
    );
}

// def play_round() -> int:
//     player_hand = deal()
//     sort_hand(player_hand)
//     score_hand(player_hand)
//     hand_to_string(player_hand)
//     get_choice()
//     #dealer
//     dealer_hand = deal()
//     score_hand(dealer_hand)
//     hand_to_string(dealer_hand)
//     dealer_plays(dealer_hand)
