import classes from './CalendarModalContent.module.css';

const CalendarModalContent = ({ children }) => {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>{children}</div>
    </div>
  );
};

export default CalendarModalContent;
