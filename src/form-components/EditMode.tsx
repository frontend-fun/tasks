import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit?"
                checked={editMode}
                onChange={updateEditMode}
            ></Form.Check>

            {editMode ?
                <div>
                    <Form.Group controlId="fromUsername">
                        <Form.Control
                            value={username}
                            onChange={updateUsername}
                            disabled={!editMode}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                        disabled={!editMode}
                    ></Form.Check>
                </div>
            :   ""}
            {student && <div>{username} is a student</div>}
            {!student && <div>{username} is not a student</div>}
        </div>
    );
}
