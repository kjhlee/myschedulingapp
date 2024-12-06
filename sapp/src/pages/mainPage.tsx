import React, { useState } from "react";
import "./mainStyle.css";
import { ScheduleItem, Days, Schedule } from "../types"; // Adjust path if needed

const MainPage: React.FC = () => {
  const [schedule, setSchedule] = useState<Schedule>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  const handleAddItem = (day: Days) => {
    const name = prompt("Enter name:");
    const shift = prompt("Enter shift time:");
    if (name && shift) {
      setSchedule((prevSchedule) => ({
        ...prevSchedule,
        [day]: [...prevSchedule[day], { name, shift }],
      }));
    }
  };

  return (
    <div className="main-container">
      <div className="title">Sapp</div>
      <div className="subtitle">by: kj lee</div>
      <div className="schedule-grid">
        {Object.keys(schedule).map((day) => (
          <div key={day} className="day" onClick={() => handleAddItem(day as Days)}>
            <div className="day-name">{day}</div>
            <div className="day-items">
              {schedule[day as Days].map((item, index) => (
                <div key={index} className="day-item">
                  <div>{item.name}</div>
                  <div>{item.shift}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
