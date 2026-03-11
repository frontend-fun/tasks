import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface student {
    name: string;
    isStudent: boolean;
    editMode: boolean;
}

export function EditMode(): React.JSX.Element {
    const [student, setStudent] = useState<student>({
        name: "Your Name",
        isStudent: true,
        editMode: false,
    });

    function updateStudent(e: React.ChangeEvent<HTMLInputElement>) {
        setStudent({ ...student, name: e.target.value });
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            {student.isStudent ?
                `${student.name} is a student`
            :   `${student.name} is not a student`}
            <Form.Group controlId="formStudentName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={student.name}
                    onChange={updateStudent}
                    hidden={!student.editMode}
                />
            </Form.Group>
            <Form.Check
                type="switch"
                id="is-student"
                label="Edit Mode?"
                checked={student.editMode}
                onChange={() => {
                    setStudent({ ...student, editMode: !student.editMode });
                }}
            />
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Student Status"
                checked={student.isStudent}
                onChange={() => {
                    setStudent({ ...student, isStudent: !student.isStudent });
                }}
                hidden={!student.editMode}
            />
        </div>
    );
}
