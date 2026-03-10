import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [student, setStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-switch"
                label="Edit Mode"
                checked={edit}
                onChange={(e) => {
                    setEdit(e.target.checked);
                }}
            />
            {!edit && (
                <div>
                    {" "}
                    {name} is {student ? "a student" : "not a student"}{" "}
                </div>
            )}
            {edit && (
                <div>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Is Student?"
                        checked={student}
                        onChange={(e) => {
                            setStudent(e.target.checked);
                        }}
                    />
                </div>
            )}
        </div>
    );
}
