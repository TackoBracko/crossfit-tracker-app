import { useRef, useState } from 'react';
import { crossfitData } from './../../data/CrossfitData.js';
import classes from './UserCalendar.module.css';
import style from './../../components/CalendarModal/CalendarModal.module.css';
import CalendarBackIcon from '../../components/Icons/CalendarBackIcon';
import CalendarForwardIcon from '../../components/Icons/CalendarForwardIcon';
import CalendarDays from '../CalendarDays';
import Modal from '../../components/CalendarModal';

export default function Calendar() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const modalRef = useRef();

  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
    openModal();
  };

  const nextMonth = () => {
    setCurrentDay((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const previousMonth = () => {
    setCurrentDay((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const openModal = () => {
    modalRef.current.open();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const closeModalOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const selectedCategoryData = crossfitData.find((data) => data.title === category);
    const filteredExercisesData = selectedCategoryData ? selectedCategoryData.exercises : [];
    setFilteredExercises(filteredExercisesData);
  };

  return (
    <>
      <header className={classes.calendarHeader}>
        <div onClick={previousMonth}>
          <CalendarBackIcon />
        </div>
        <h1>{months[currentDay.getMonth()]}</h1>
        <div onClick={nextMonth}>
          <CalendarForwardIcon />
        </div>
      </header>

      <section className={classes.calendarSection}>
        <div className={classes.daysName}>
          {daysOfWeek.map((weekDay, index) => {
            return <div key={index}>{weekDay}</div>;
          })}
        </div>
        <CalendarDays currentDay={currentDay} changeCurrentDay={changeCurrentDay} />
      </section>

      <Modal ref={modalRef}>
        <div className={style.modalOverlay} onClick={closeModalOutside}>
          <div className={style.modalContent}>
            <h2>
              Plan for {currentDay.getDate()} {currentDay.toLocaleString('en-US', { month: 'long' })} {currentDay.getFullYear()}
            </h2>
            <div className={style.modalInput}>
              <label>Category</label>
              <select className={style.dropdownMenu} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option>Choose a Category</option>
                {crossfitData.map((category) => (
                  <option key={category.id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className={style.modalInput}>
              <label>Exercises for {selectedCategory} </label>
              <select className={style.dropdownMenu}>
                <option>Choose a Exercise</option>
                {filteredExercises.map((exercise) => (
                  <option key={exercise.id}>{exercise.name}</option>
                ))}
              </select>
            </div>

            <div className={style.modalInput}>
              <label>Notes</label>
              <textarea className={style.textarea}></textarea>
            </div>

            <div className={style.modalBtn}>
              <button className={style.primaryBtn}>Add</button>
              <button className={style.cancelBtn} onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

/*
export default function UserCalendar() {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const modalRef = useRef();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);

  const openModal = () => {
    modalRef.current.open();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const closeModalOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const changeSelectedDay = (day) => {
    setSelectedDate(new Date(day.year, day.month, day.number));
    openModal();
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const selectedCategoryData = crossfitData.find((data) => data.title === category);
    const filteredExercisesData = selectedCategoryData ? selectedCategoryData.exercises : [];
    setFilteredExercises(filteredExercisesData);
  };

  const changeToPrevMonth = () => {
    setSelectedDate((pDate) => {
      const pMonth = pDate.getMonth() - 1;
      const pYear = pDate.getFullYear();
      return new Date(pYear, pMonth);
    });
  };

  const changeToNextMonth = () => {
    setSelectedDate((pDate) => {
      const nMonth = pDate.getMonth() + 1;
      const nYear = pDate.getFullYear();
      return new Date(nYear, nMonth);
    });
  };

  return (
    <>
      <header className={classes.calendarHeader}>
        <div onClick={changeToPrevMonth}>
          <CalendarBackIcon />
        </div>
        <h1>{months[selectedDate.getMonth()]}</h1>
        <div onClick={changeToNextMonth}>
          <CalendarForwardIcon />
        </div>
      </header>

      <section className={classes.calendarSection}>
        <div className={classes.daysName}>
          {daysOfWeek.map((weekDay, index) => {
            return <div key={index}>{weekDay}</div>;
          })}
        </div>
        <CalendarDays day={selectedDate} changeSelectedDay={changeSelectedDay} />
      </section>

      <Modal ref={modalRef}>
        <div className={style.modalOverlay} onClick={closeModalOutside}>
          <div className={style.modalContent}>
            <h2>
              Plan for {selectedDate.getDate()} {selectedDate.toLocaleString('en-US', { month: 'long' })} {selectedDate.getFullYear()}
            </h2>
            <div className={style.modalInput}>
              <label>Category</label>
              <select className={style.dropdownMenu} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option>Choose a Category</option>
                {crossfitData.map((category) => (
                  <option key={category.id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className={style.modalInput}>
              <label>Exercises for {selectedCategory} </label>
              <select className={style.dropdownMenu}>
                <option>Choose a Exercise</option>
                {filteredExercises.map((exercise) => (
                  <option key={exercise.id}>{exercise.name}</option>
                ))}
              </select>
            </div>

            <div className={style.modalInput}>
              <label>Notes</label>
              <textarea className={style.textarea}></textarea>
            </div>

            <div className={style.modalBtn}>
              <button className={style.primaryBtn}>Add</button>
              <button className={style.cancelBtn} onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
*/
