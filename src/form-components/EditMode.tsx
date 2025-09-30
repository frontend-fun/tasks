import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-check form-switch">
                <input
                    id="edit-mode-checkbox"
                    className="form-check-input"
                    type="checkbox"
                    checked={isEditMode}
                    aria-label="Edit Mode"
                    onChange={(e) => {
                        setIsEditMode(e.target.checked);
                    }}
                />
                <label className="form-check-label" htmlFor="edit-mode-checkbox">
                    Edit Mode
                </label>
            </div>
            {isEditMode ?
                <div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name-input">
                            Name:
                        </label>
                        <input
                            id="name-input"
                            className="form-control"
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-check">
                        <input
                            id="student-checkbox"
                            className="form-check-input"
                            type="checkbox"
                            checked={isStudent}
                            aria-label="Student"
                            onChange={(e) => {
                                setIsStudent(e.target.checked);
                            }}
                        />
                        <label className="form-check-label" htmlFor="student-checkbox">
                            Student
                        </label>
                    </div>
                </div>
            :   <div>
                    {userName} is {isStudent ? "" : "not "}a student
                </div>
            }
        </div>
    );
}
