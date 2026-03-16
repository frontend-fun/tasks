import React, { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function _edit(event: React.ChangeEvent<HTMLInputElement>): void {
        if (editing) {
            const val = event.target.value;
            setName(val);
        }
    }
    /*
    function editMode(event: React.ChangeEvent<HTMLInputElement>): void {
        //_edit();
        setEditing(event.target.checked);
    }*/
    function _student(event: React.ChangeEvent<HTMLInputElement>): void {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <FormCheck
                type="switch"
                id="edit"
                label="Edit Mode"
                checked={editing}
                onChange={() => {
                    setEditing(!editing);
                }}
            />
            <div>
                {editing ?
                    <div>
                        <FormControl value={name} onChange={_edit} />

                        <FormCheck
                            type="checkbox"
                            id="student"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={_student}
                        />
                    </div>
                :   <div>
                        {name} is {isStudent ? "a student." : "not a student."}
                    </div>
                }
            </div>
        </div>
    );
}
