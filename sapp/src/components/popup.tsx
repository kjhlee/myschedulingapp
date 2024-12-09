import React, { useState } from 'react';
import "./popup.css"
import { ScheduleItem } from '../types';



function Popup({
    setPopupVisible,
    selectedDay,
    addShift,
  }: {
    setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
    selectedDay: string | null;
    addShift: (day: string, shift: ScheduleItem) => void;
  }) 
  {
    const [name, setName] = useState<string>("");
    const [startTime, setStartTime] = useState("");
    const [startAmPm, setStartAmPm] = useState<string>("AM");

    const [endTime, setEndTime] = useState("");
    const [endAmPm, setEndAmPm] = useState("PM");

    const handleClose = () => {
        setPopupVisible(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(selectedDay){
            addShift(selectedDay, {name, startTime, endTime});
        }
        setPopupVisible(false);
    }

    return (
        <div className = 'popup'>
            <div className = 'popup-inner'>
                <button className = 'close-btn' onClick = {handleClose}>
                    x
                </button>

                <form>
                    <label>
                        Name:
                        <input 
                            type = 'text'
                            value = {name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder= 'name'
                            required
                        />
                    </label>
                </form>
                <form>
                    <label>
                        start time:
                        <input 
                            type = 'text'
                            value = {startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            placeholder= 'HH:MM'
                            required
                        />
                        <select 
                            value = {startAmPm}
                            onChange = {(e) => setStartAmPm(e.target.value)}
                        >
                        <option value = "AM">AM</option>
                        <option value = "PM">PM</option>
                        </select>
                    </label>
                </form>
                <form>
                    <label>
                        end time:
                        <input 
                            type = 'text'
                            value = {endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            placeholder= 'HH:MM'
                            required
                        />
                        <select 
                            value = {endAmPm}
                            onChange = {(e) => setEndAmPm(e.target.value)}
                        >
                        <option value = "AM">AM</option>
                        <option value = "PM">PM</option>
                        </select>
                    </label>
                </form>
                <button className = 'form-submission' onClick={handleSubmit}>
                    SUBMIT
                </button>
            </div>


        </div>
    );
};

export default Popup