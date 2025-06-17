import classes from './../HeaderContent/HeaderContent.module.css';

export default function HeaderContent({ modalTitle, workoutTitle, setWorkoutTitle, error, setError }) {
  return (
    <>
      <h2 className={classes.headerTitle}>{modalTitle}</h2>
      <div className={classes.workoutInput}>
        <label>Workout Title</label>
        {error.title && <p className={classes.errorText}>Workout title is required</p>}
        <input
          className={classes.workoutTitle}
          type="text"
          value={workoutTitle}
          onChange={(e) => {
            setWorkoutTitle(e.target.value);
            if (error.title) {
              setError((prev) => ({ ...prev, title: false }));
            }
          }}
        />
      </div>
    </>
  );
}
