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

    function chooseMember(newMember: string) {
        if (!team.includes(newMember)) {
            setTeam([...team, newMember]);
        }
    }

    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <div style={{ fontWeight: 'bold' }}>Choose Team</div>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            <Button onClick={() => { chooseMember(option); }}>
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
    <strong>Team:</strong>
    <div role="group">
        {team.map((member: string) => (
            <div key={member} role="listitem">
                {member}
            </div>
        ))}
    </div>
    <Button onClick={clearTeam}>Clear Team</Button>
</Col>
            </Row>
        </div>
    );
}