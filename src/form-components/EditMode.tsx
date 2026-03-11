import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    function updateStudentStatus(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            {editMode ?
                <div>
                    <Form.Group controlId="edit-mode-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="edit-mode-student"
                        label="Student"
                        checked={isStudent}
                        onChange={updateStudentStatus}
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
