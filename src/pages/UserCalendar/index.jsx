import { useRef, useState } from 'react';
import { crossfitData } from '../../data/CrossfitData';
import classes from './UserCalendar.module.css';
import style from './../../components/CalendarModal/CalendarModal.module.css';
import CalendarBackIcon from '../../components/Icons/CalendarBackIcon';
import CalendarForwardIcon from '../../components/Icons/CalendarForwardIcon';
import CalendarDays from '../CalendarDays';
import Modal from '../../components/CalendarModal';
import DropDownArrow from '../../components/Icons/DropDownArrow';

export default function UserCalendar() {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const modalRef = useRef();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  //const [notes, setNotes] = useState('');

  const openModal = () => {
    modalRef.current.open();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const changeSelectedDay = (day) => {
    setSelectedDate(new Date(day.year, day.month, day.number));
    openModal();
  };

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropdownOpen);
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
        <div className={style.modalOverlay}>
          <div className={style.modalContent}>
            <h2>Plan for {selectedDate.toDateString()} </h2>

            <div className={style.dropdownMenu}>
              <h3 onClick={toggleDropdown}>
                Categories <DropDownArrow />
              </h3>
              {isDropdownOpen && (
                <ul className={style.dropdownMenuList}>
                  {crossfitData.map((category) => {
                    return (
                      <li key={category.id} onClick={() => console.log(`${category.title}`)}>
                        {category.title}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className={style.dropdownMenu}>
              <h3>Exercises</h3>
            </div>

            <div className="textarea">
              <h3>Notes</h3>
              <textarea placeholder="Add your notes here..." />
            </div>

            <div className={style.modalBtn}>
              <button>Add</button>
              <button onClick={closeModal}>Cancle</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
