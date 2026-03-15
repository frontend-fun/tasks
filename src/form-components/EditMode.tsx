import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            Edit Mode
            <div className="form-switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={(event) => {
                        setIsEditMode(event.target.checked);
                    }}
                />
                <label>Edit Mode:</label>
            </div>
            {isEditMode ?
                <div>
                    <input
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                    <label>
                        Student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={(event) => {
                                setIsStudent(event.target.checked);
                            }}
                        />
                    </label>
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            }
        </div>
    );
}
