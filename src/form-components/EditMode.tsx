import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode"
                checked={isEditMode}
                onChange={() => {
                    setIsEditMode(!isEditMode);
                }}
            />
            {isEditMode ?
                <div>
                    <Form.Group controlId="userName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student"
                        checked={isStudent}
                        onChange={(e) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </div>
            }
        </div>
    );
}
