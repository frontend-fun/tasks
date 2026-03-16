import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const[editMode, setEditMode] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>("Your Name")
    const [isStudent, setIsStudent] = useState<boolean>(true)

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>){
        setEditMode(event.target.checked)
    }
    function updateisStudent(event: React.ChangeEvent<HTMLInputElement>){
        setIsStudent(event.target.checked)
    }
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>){
        setUserName(event.target.value)
    }
    return (
        <div>
            <Form.Check 
                type = "switch"
                id = "edit-mode-switch"
                label = "Edit Mode"
                checked = {editMode}
                onChange={updateEditMode}
            /> 
            {editMode ? 
            (<div>
                <Form.Group controlId = "userName">
                    <Form.Label>User Name:</Form.Label>
                    <Form.Control 
                        value = {userName}
                        onChange = {updateUserName} />
                </Form.Group>
                <Form.Check 
                    type = "checkbox"
                    id = "is-student-check" 
                    label = "Are you a student?" 
                    checked = {isStudent}
                    onChange = {updateisStudent} />
            </div>) : 
            <div> 
                <h3> Display Mode</h3>
                <div>{`${userName} is ${isStudent ? "a student" : "not a student"}`}</div>
            </div>
}
            </div>

    )
}
