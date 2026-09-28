import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event) => {
                    setEditMode(event.target.checked);
                }}
            />

            {editMode ?
                <div>
                    <Form.Control
                        type="text"
                        value={name === "Your Name" ? "" : name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />

                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Student"
                        checked={isStudent}
                        onChange={(event) => {
                            setIsStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <span>
                    {name} is {isStudent ? "" : "not "}a student
                </span>
            }
        </div>
    );
}
