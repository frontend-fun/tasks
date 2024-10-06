import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name is a student");
    const [isStudent, setIsStudent] = useState(true);

    const togleEditMode = () => {
        setIsEditMode(!isEditMode);
    };
    const handleNameChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };
    const handleCheckboxChanges = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <div>
                <label className="form-switch">
                    Edit Mode:
                    <input
                        type="checkbox"
                        checked={isEditMode}
                        onChange={togleEditMode}
                    />
                </label>
            </div>
            {isEditMode ?
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={handleNameChanges}
                        />
                    </label>

                    <label className="form-switch">
                        Are you a student?
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleCheckboxChanges}
                        />
                    </label>
                </form>
            :   <p>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </p>
            }
        </div>
    );
}
