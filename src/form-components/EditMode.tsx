import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): React.JSX.Element {
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-mode-check"
                    label="editMode?"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </div>
            {editMode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="isStudent?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            )}
            {editMode && (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
            )}
            <div>
                {name} is {isStudent ? "a student" : "not a student"}
            </div>
        </div>
    );
}
