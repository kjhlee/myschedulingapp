import { useState }from 'react';
import './mainStyle.css';


const mainPage = () => {
    const [schedule, setSchedule] = useState({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    });

    const handleAddItem = (day) => {

    }
}

function mainPage() {
    return (
        <div className = "main-container">
            <h1 className = "title">Sapp</h1>
            <p className = "subtitle">by: kj lee</p>
            <div className = "schedule-grid">
                <div className = "day mon">
                    <p>Monday</p>
                </div>
                <div className = "day tues">
                    <p>Tuesday</p>
                </div>
                <div className = "day wed">
                    <p>Wednesday</p>
                </div>
                <div className = "day thurs">
                    <p>Thursday</p>
                </div>
                <div className = "day fri">
                    <p>Friday</p>
                </div>
                <div className = "day sat">
                    <p>Satuday</p>
                </div>
                <div className = "day sun">
                    <p>Sunday</p>
                </div>
                
            </div>
        </div>
    );
}
export default mainPage;