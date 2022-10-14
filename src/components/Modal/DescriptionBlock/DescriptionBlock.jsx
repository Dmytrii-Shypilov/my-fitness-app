import s from './description-block.module.scss';

const DescriptionBlock = ({ goBack, clickedTraining }) => {
  const { name, exercises, notes } = clickedTraining;
  return (
    <section className={s.section}>
      <div className={s.trainingBlock}>
        <p className={s.trainingName}>{name}</p>
        <ul className={s.list}>
          {exercises.map((el, idx) => {
            return (
              <li className={s.listItem}>
                <p className={s.exerciseName}>{idx+1}. {el.exercise}</p>
                <span className={s.params}>{el.resistance} kg |</span>
                <span className={s.params}>{el.sets} x {el.repetitions} |</span>
                <span className={s.params}>{el.restInterval} secs</span>
              </li>
            );
          })}
         
        </ul>
        {notes && 
        <div>
          <p className={s.notesTitle}>Notes:</p>
          <p className={s.notes}>{notes}</p>
        </div>
        }
      </div>
      <div className={s.btnContainer}>
        <button onClick={goBack} className={s.btn}>Back</button>
      </div>
    </section>
  );
};

export default DescriptionBlock;
