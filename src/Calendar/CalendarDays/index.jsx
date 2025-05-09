import classes from './CalendarDays.module.css';
import { WorkoutDetailsContext } from '../../components/Context/WorkoutDetailsContext';
import { useContext } from 'react';

export default function CalendarDays({ currentDay, changeCurrentDay }) {
  const firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];
  const todayDate = new Date();

  const { allWorkouts } = useContext(WorkoutDetailsContext);

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === currentDay.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: todayDate.toDateString() === firstDayOfMonth.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <div className={classes.dates}>
      {currentDays.map((day, index) => {
        const currentDate = `${day.number}_${day.month + 1}_${day.year}`;
        const dayHasWorkout = allWorkouts[currentDate];

        return (
          <div
            key={index}
            className={`${classes.day} ${day.currentMonth ? classes.allDays : ''} ${day.selected ? classes.currentDay : ''} ${dayHasWorkout && day.currentMonth ? classes.workoutDay : ''}`}
            onClick={() => changeCurrentDay(day)}
          >
            <p>{day.number}</p>
          </div>
        );
      })}
    </div>
  );
}
