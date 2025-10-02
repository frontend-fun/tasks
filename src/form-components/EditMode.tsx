import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [text, setText] = useState<string>("Your Name");

    function updateChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={updateChange}
            />
            {!editMode && (
                <p>
                    {text} is {isStudent ? "a student" : "not a student"}
                </p>
            )}

            {editMode && (
                <>
                    <Form.Group controlId="nameInput">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        label="student"
                        id="student"
                        checked={isStudent}
                        onChange={(e) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </>
            )}
        </div>
    );
}
