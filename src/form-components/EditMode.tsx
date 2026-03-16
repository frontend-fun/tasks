import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateInEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <span>
                {/* {!inEditMode ?
                    `${username} is a student`
                :   `${username} is not a student`} */}
                {isStudent && `${username} is a student`}
                {!isStudent && `${username} is not a student`}
            </span>
            {inEditMode && (
                <Form.Check
                    type="checkbox"
                    label="Toggle student status"
                    id="student"
                    checked={isStudent}
                    onChange={updateIsStudent}
                />
            )}

            <Form.Check
                type="switch"
                label="Toggle edit mode"
                checked={inEditMode}
                onChange={updateInEditMode}
            />

            {inEditMode && (
                <Form.Group>
                    <Form.Label>Edit username</Form.Label>
                    <Form.Control value={username} onChange={updateUsername} />
                </Form.Group>
            )}
        </div>
    );
}
