import classes from './LayoutContent.module.css';

const LayoutContent = ({ children }) => {
  return (
    <div className={classes.modalLayout}>
      <div className={classes.modalContent}>{children}</div>
    </div>
  );
};

export default LayoutContent;
