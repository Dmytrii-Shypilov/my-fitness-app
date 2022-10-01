import s from './description-block.module.scss';

const DescriptionBlock = ({ goBack, clickedTraining }) => {
  const { name, exercises, notes } = clickedTraining;
  return (
    <section>
      <div className={s.trainingBlock}>
        <p className={s.trainingName}>{name}</p>
        <ul className={s.list}>
          {exercises.map(el => {
            return (
              <li className={s.listItem}>
                <p className={s.exerciseName}>{el.exercise}</p>
                <span className={s.params}>{el.resistance} kg</span>
                {el.sets} x {el.repetitions}
                <span className={s.params}>{el.restInterval} secs</span>
              </li>
            );
          })}
         
        </ul>
        {notes && <p>{notes}</p>}
      </div>
      <div className={s.btnContainer}>
        <button onClick={goBack}>Back</button>
      </div>
    </section>
  );
};

export default DescriptionBlock;
