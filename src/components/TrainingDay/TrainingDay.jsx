import s from './training-day.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { createTrainingSession } from 'redux/trainings/trainings-slice';

const TrainingDay = ({ trainingDay, resetTraining }) => {
  const { name, exercises } = trainingDay;
  const [flags, setFlags] = useState({
    isNotesOpen: false,
  })
  const [note, setNote] = useState({
    content: ''
  })
  
const {isNotesOpen} = flags
const {content} = note

const dispatch = useDispatch()


const onInput = (e) => {
  setNote({
    content: e.target.value
  })
}

const toggleNotes = () => {
  setFlags(prevState=> {
    return {
      isNotesOpen: !isNotesOpen
    }
  })
}

const createTraining = () => {
  const training = {
    ...trainingDay,
    notes: note.content,
  }

  dispatch(createTrainingSession(training))
  resetTraining()
  setFlags({
    isNotesOpen: false,
  })
  setNote({
    content: '',
  })

}



  return (
    <section className={s.section}>
      {!name && (
        <div className={s.messageContainer}>
          <p className={s.message}>There is no training data added yet</p>
        </div>
      )}
      {name && (
        <>
          <h3 className={s.title}>{name}</h3>
          {exercises.length !== 0 && (
            <>
              <ul className={s.exerciseList}>
                {exercises.map((el, idx) => {
                  return (
                    <li className={s.listItem} key={idx}>
                      <p className={s.order}>Exercise {idx + 1}</p>
                      <p className={s.exerciseName}>
                        {el.exercise} 
                      </p>
                      <p className={s.description}>
                        <span className={s.label}>Resistance:</span>
                        {el.resistance} kg ;
                      </p>
                      <p className={s.description}>
                        <span className={s.label}>Sets:</span>
                        {el.sets} ;
                      </p>
                      <p className={s.description}>
                        <span className={s.label}>Reps:</span>
                        {el.repetitions} ;
                      </p>
                      <p className={s.description}>
                        <span className={s.label}>Rest:</span> {el.restInterval}{' '}
                        secs ;
                      </p>
                    </li>
                  );
                })}
              </ul>
             
                <span onClick={toggleNotes} className={s.notesLabel}>
                { isNotesOpen ? <span className={s.circle}>-</span> : <span className={s.circle}>+</span>}
                Add notes
                </span>
                {isNotesOpen && <div className={s.notesWrap}>
                <textarea onChange={onInput} value={content} type="text" className={s.notes}/>
                </div>}
                <div className={s.btnWrap}>
                <button onClick={createTraining} type="button" className={s.submitBtn}>
                  Save
                </button>
                </div>
              
            </>
          )}
        </>
      )}
    </section>
  );
};

export default TrainingDay;
