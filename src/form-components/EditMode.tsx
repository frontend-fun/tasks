import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function isEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function changeStudentName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }
    function changeIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="isEditMode"
                label="In edit mode?"
                checked={editMode}
                onChange={isEditMode}
            />
            {editMode ?
                <div>
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={studentName}
                            onChange={changeStudentName}
                            disabled={!editMode}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="isStudent"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={changeIsStudent}
                        disabled={!editMode}
                    />
                </div>
            :   <div>
                    {studentName}
                    {isStudent ? " is a student" : " is not a student"}
                </div>
            }
        </div>
    );
}
