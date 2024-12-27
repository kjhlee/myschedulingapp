import React, { useState } from 'react';
import "./popup.css"
import { ScheduleItem, editShift } from '../types';



function Popup({
    setPopupVisible,
    selectedDay,
    addShift,
    selectedShift,
    handleUpdateShift,
}: {
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDay: string | null;
    addShift: (day: string, shift: ScheduleItem) => void;
    selectedShift: editShift | null;
    handleUpdateShift: (updateItem: editShift) => void;
}) {
    const [name, setName] = useState<string>(selectedShift?.name || "");
    const [startTime, setStartTime] = useState(selectedShift?.startTime || "");
    const [endTime, setEndTime] = useState(selectedShift?.endTime || "");
    const [startAmPm, setStartAmPm] = useState<string>("AM");
    const [endAmPm, setEndAmPm] = useState<string>("PM");

    const handleClose = () => {
        setPopupVisible(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedShift) {
            // Editing an existing shift
            handleUpdateShift({
                ...selectedShift,
                name,
                startTime,
                endTime,
            });
        } else if (selectedDay) {
            // Adding a new shift
            addShift(selectedDay, { name, startTime, endTime });
        }

        setPopupVisible(false);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={handleClose}>
                    x
                </button>

                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                    </label>
                    <label>
                        Start Time:
                        <input
                            type="text"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            placeholder="HH:MM"
                            required
                        />
                        <select
                            value={startAmPm}
                            onChange={(e) => setStartAmPm(e.target.value)}
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </label>
                    <label>
                        End Time:
                        <input
                            type="text"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            placeholder="HH:MM"
                            required
                        />
                        <select
                            value={endAmPm}
                            onChange={(e) => setEndAmPm(e.target.value)}
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </label>
                    <button className="form-submission" type="submit">
                        {selectedShift ? "Update Shift" : "Add Shift"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Popup;
