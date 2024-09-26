import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, switchMode] = useState<boolean>(false);
    const [isStudent, changeIsStudent] = useState<boolean>(true);
    const [name, changeName] = useState<string>("Your Name");
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        switchMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        changeIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        changeName(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="editModeCheck"
                label="edit"
                checked={editMode}
                onChange={updateMode}
            />
            <div>
                {!editMode && isStudent && <div>{name} is a student</div>}
            </div>
            <div>
                {!editMode && !isStudent && <div>{name} is not a student</div>}
            </div>
            <div>
                {editMode && (
                    <Form.Group controlId="checkAnswer">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                )}
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        id="switchIsStudent"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                )}
            </div>
        </div>
    );
}
