import React, { useState } from "react";
import "./mainStyle.css";
import { editShift, ScheduleItem } from "../types";
import Popup from "../components/popup";

const MainPage: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<string | null>(null);
    const[popupVisible, setPopupVisible] = useState(false);
    const [selectedShift, setSelectedShift] = useState<editShift | null>(null);


    const [shifts, setShifts] = useState<{[key: string]: ScheduleItem[] }>({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
    });

    let handleDayClick = (day: string) => {
        setSelectedDay(day);
        setSelectedShift(null);
        setPopupVisible(true);
    }
    const addShift = (day: string, shift: ScheduleItem) => {
        setShifts((prevShifts) => ({
          ...prevShifts,
          [day]: [...prevShifts[day], shift],
        }));
    };

    const handleDeleteShift = (day: string, index: number) => (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.stopPropagation();
        setShifts((prevShifts) => ({
            ...prevShifts,
            [day]: prevShifts[day].filter((_, i) => i !== index),
        }));
    }

    const handleShiftClick = (day: string, index: number) => (event: React.MouseEvent<HTMLLIElement>) => {
        event.stopPropagation(); // Prevent parent click handler
        const selectedShiftData = shifts[day][index];
        setSelectedShift({
            ...selectedShiftData,
            day,
            index,
        })
        setPopupVisible(true);
    }
    const handleUpdateShift = (updateItem: editShift) =>  {
        const updatedShifts = {...shifts};
        if(selectedShift){
            updatedShifts[selectedShift.day][selectedShift.index] = updateItem;
        }
        setShifts(updatedShifts); // Update state with new/edited shift
        setPopupVisible(false); // Close the popup
        setSelectedShift(null); // Reset selection
    };
    const cslog = () => {
        console.log(shifts);
    }

    return (
        <div>
            <div className = 'title'>SAPP</div>
            <div className = 'subtitle'>by: kj lee</div>
            <div className = 'main-container'>
                <div className = 'schedule-grid'>
                    {Object.keys(shifts).map((day) => (
                        <div key={day} className = 'day-column' onClick={() => handleDayClick(day)}>
                            <h3>{day}</h3>
                            <ul>
                                {shifts[day].map((shift, index) => (
                                <li key={index} className = 'shift' onClick={handleShiftClick(day, index)}>
                                    <button 
                                    className = 'del-btn' 
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        handleDeleteShift(day, index)(e)
                                        }}>
                                            x
                                    </button>
                                    <div className = 'shift-name'>{shift.name}:</div>
                                    <div className = 'shift-time'>{shift.startTime} - {shift.endTime}</div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        {popupVisible && (
          <Popup
            setPopupVisible={setPopupVisible}
            selectedDay={selectedDay}
            addShift={addShift}
            selectedShift={selectedShift}
            handleUpdateShift={handleUpdateShift}
          />
        )}
        <button onClick={cslog}>button</button>
      </div>
    );
};

export default MainPage;
