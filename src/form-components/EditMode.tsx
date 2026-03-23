import { Form } from "react-bootstrap";
import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("");
    const [editable, setEditable] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    onChange={() => {
                        setEditable(!editable);
                    }}
                />
            </Form.Group>
            {editable && (
                <>
                    <Form.Control
                        type="text"
                        value={name}
                        placeholder="Your Name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />

                    <Form.Check
                        id="is-student"
                        type="checkbox"
                        label="student"
                        checked={isStudent}
                        onChange={() => {
                            setIsStudent(!isStudent);
                        }}
                    />
                </>
            )}
            {
                <div>
                    {name || "Your Name"} is {isStudent ? "a" : "not a"} student
                </div>
            }
        </div>
    );
}
