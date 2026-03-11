import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string): void {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    function clearTeam(): void {
        setTeam([]);
    }

    return (
        <div>
            <div>Choose Team</div>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    chooseMember(option);
                                }}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.length > 0 && (
                        <ul>
                            {team.map((member: string) => (
                                <li key={member}>{member}</li>
                            ))}
                        </ul>
                    )}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
