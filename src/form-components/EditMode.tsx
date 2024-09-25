import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateStudentName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }

    function updateIsEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            {
                isEdit ?
                    // Edit mode: show input fields for editing
                    <>
                        <Form.Group controlId="basic">
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={studentName}
                                onChange={updateStudentName}
                            />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="Are they a student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </>
                    // View mode: display the name and status as text
                :   <p>
                        {studentName}{" "}
                        {isStudent ? "is a student." : "is not a student."}
                    </p>

            }
            <Form.Check
                type="switch"
                id="is-edit"
                label="Edit Mode"
                checked={isEdit}
                onChange={updateIsEdit}
            />
        </div>
    );
}
