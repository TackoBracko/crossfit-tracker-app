import classes from './CalendarDays.module.css';

export default function CalendarDays({ currentDay, changeCurrentDay, savedWorkout }) {
  const firstDayOfMonth = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];
  const todayDate = new Date();

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
        const dayHasWorkout = savedWorkout.find((workout) => {
          return new Date(workout.date).toDateString() === day.date.toDateString();
        });

        return (
          <div
            key={index}
            className={`${classes.date} ${day.currentMonth ? classes.allDates : ''} ${day.selected ? classes.currentDate : ''} ${dayHasWorkout ? classes.workoutDay : ''}`}
            onClick={() => changeCurrentDay(day)}
          >
            <p>{day.number}</p>
          </div>
        );
      })}
    </div>
  );
}
