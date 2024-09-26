import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    // State for edit mode, user name, and student status
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    // Handler to toggle edit mode
    const handleToggleEditMode = () => {
        setIsEditMode((prevMode) => !prevMode);
    };

    // Handler to update user name
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    // Handler to update student status
    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                {" "}
                {/* Added class here */}
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={handleToggleEditMode}
                />
                Edit Mode
            </label>
            {isEditMode ?
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleStudentChange}
                        />
                        Are you a student?
                    </label>
                </div>
            :   <p>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
