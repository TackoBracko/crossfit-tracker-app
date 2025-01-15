import classes from './UserCalendar.module.css';
import { useState } from 'react';
import CalendarBackIcon from '../../components/Icons/CalendarBackIcon';
import CalendarForwardIcon from '../../components/Icons/CalendarForwardIcon';
import CalendarDays from '../CalendarDays';

export default function UserCalendar() {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [selectedDate, setSelectedDay] = useState(new Date());
  const [showPopUp, setShowPopUp] = useState(false);

  const changeSelectedDay = (day) => {
    setSelectedDay(new Date(day.year, day.month, day.number));
    togglePopUp(true);
  };

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      <header className={classes.calendarHeader}>
        <CalendarBackIcon />
        <h1>{months[selectedDate.getMonth()]}</h1>
        <CalendarForwardIcon />
      </header>

      <section className={classes.calendarSection}>
        <div className={classes.daysName}>
          {daysOfWeek.map((weekDay, index) => {
            return <div key={index}>{weekDay}</div>;
          })}
        </div>
        <CalendarDays day={selectedDate} changeSelectedDay={changeSelectedDay} />
      </section>

      {showPopUp && (
        <div onClick={togglePopUp} className={classes.popupDisplay}>
          <div className={classes.popupText}>
            <h2>Daily plan</h2>
            <button onClick={togglePopUp} className={classes.closeBtn}>
              Close
            </button>
          </div>
        </div>
      )}

      <section className={classes.planSection}>
        <h2>My Plan</h2>
        <div className={`${classes.planSelector} ${classes.selected ? classes.selected : ''}`}>
          <p>All workouts</p>
          <p>Legs</p>
        </div>
      </section>
    </>
  );
}
