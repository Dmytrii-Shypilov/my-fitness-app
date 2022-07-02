import s from './day.module.scss';

const Day = ({ date }) => {
  const { day, exercises } = date;

  return (
    <>
      <h4 className={s.dayTitle}>{day}</h4>
      <div className={s.daySchedule}>
        {exercises.map(el => (
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.parameter}>Exercise:</span>
              {el.name}
            </li>
            <li className={s.listItem}>
              <span className={s.parameter}>Resistance:</span>
              {el.resistance} kg
            </li>
            <li className={s.listItem}>
              <span className={s.parameter}>Sets:</span>
              {el.sets}
            </li>
            <li className={s.listItem}>
              <span className={s.parameter}>Reps:</span>
              {el.reps} 
            </li>
            <li className={s.listItem}>
              <span className={s.parameter}>Rest:</span>
              {el.rest} min
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Day;
