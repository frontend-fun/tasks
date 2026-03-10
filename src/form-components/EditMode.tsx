import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-mode-check"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ?
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />

                    <Form.Group controlId="studentName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateUserName}
                        />
                    </Form.Group>
                </div>
            :   <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
