import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode"
                checked={edit}
                onChange={updateEditMode}
                className="mb-2"
            />
            {edit && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="student-status"
                        label="Student"
                        checked={student}
                        onChange={updateStudent}
                        className="mb-2"
                    />
                    <Form.Group controlId="formName">
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
            )}
            <div>
                {name} {student ? "is" : "is not"} a student
            </div>
        </div>
    );
}
