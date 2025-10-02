import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean> (false);
    const [userName, setUserName] = useState<string> ("Your Name");
    const [isStudent, setIsStudent] = useState<boolean> (true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode=switch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={(e) => { setIsEditMode(e.target.checked); }}
            />
            {isEditMode ? (
                <Form>
                    <Form.Group controlId="userName" className="mb-3">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(e) => {setUserName(e.target.value);}}
                            placeholder="Enter your name"
                        />
                    </Form.Group>
                    <Form.Group controlId="isStudent" className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="student"
                            checked={isStudent}
                            onChange={(e) => {setIsStudent(e.target.checked);}}
                            />
                    </Form.Group>
                </Form>
            ) : (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}
