import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [userName, setName] = useState<string>("Your Name");

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={updateEdit}
                />
            </div>
            <div>
                {isStudent ?
                    <div>{userName} is a student.</div>
                :   <div>{userName} is not a student.</div>}
            </div>
            <div>
                {editMode ?
                    <Form.Group controlId="user-form">
                        <Form.Label>Change Name:</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateName}
                        ></Form.Control>
                        <Form.Check
                            type="checkbox"
                            id="student-check"
                            label="Student"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </Form.Group>
                :   <div></div>}
            </div>
        </div>
    );
}
