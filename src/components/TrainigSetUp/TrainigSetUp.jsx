import s from './training-setup.module.scss';
import Schedule from 'components/Schedule';

import { exerciseData } from 'database/exercises';
import { useState } from 'react';
import { useContext } from 'react';
import { scheduleContext } from 'context/scheduleContext';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const initialState = {
  name: '',
  resistance: null,
  sets: null,
  reps: null,
  rest: null,
};

const TrainigSetUp = () => {
  const { schedule, addExercise, removeExercise } = useContext(scheduleContext);
  const [exerciseInput, SetExerciseInput] = useState(initialState);
  const [form, setForm] = useState({
    formIsVisible: false,
    weekIsVisible: true,
    choosenDay: '',
  });

  const onChange = ({ target }) => {
    SetExerciseInput(prevState => {
      return {
        ...prevState,
        [target.id]: target.value,
      };
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    addExercise(exerciseInput, choosenDay);
  };

  const chooseDay = e => {
    const day = e.target.textContent;
    setForm({
      formIsVisible: true,
      weekIsVisible: false,
      choosenDay: day,
    });
  };

  const finishDaySetUp = () => {
    setForm({
      formIsVisible: false,
      weekIsVisible: true,
      choosenDay: '',
    });
  };

  const { formIsVisible, weekIsVisible, choosenDay } = form;
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h3 className={s.title}>Set up your training schedule</h3>
        {weekIsVisible && (
          <ul className={s.weekList}>
            {days.map(day => (
              <li onClick={chooseDay} className={s.weekDay}>
                {day}
              </li>
            ))}
          </ul>
        )}

        {formIsVisible && (
          <form onSubmit={onSubmit} className={s.form}>
            <h3 className={s.formTitle}>{choosenDay}</h3>
            <div>
              <label className={s.label} htmlFor="">
                <span className={s.info}>Exercise</span>
                <select onChange={onChange} id="name" placeholder="day">
                  <option>choose exercise</option>
                  {exerciseData.map(ex => {
                    const { exercise } = ex;
                    return <option value={exercise}>{exercise}</option>;
                  })}
                </select>
              </label>
              <label className={s.label} htmlFor="">
                <span className={s.info}>Resistance</span>
                <input onChange={onChange} type="number" id="resistance" />
              </label>
              <label className={s.label} htmlFor="">
                <span className={s.info}>Sets</span>
                <input onChange={onChange} type="number" id="sets" />
              </label>
              <label className={s.label} htmlFor="">
                <span className={s.info}>Reps per set</span>
                <input onChange={onChange} type="number" id="reps" />
              </label>
              <label className={s.label} htmlFor="">
                <span className={s.info}>Rest Interval</span>
                <input onChange={onChange} type="number" id="rest" />
              </label>
            </div>
            <button type="submit" className={s.button}>
              Add Exercise
            </button>
            <button onClick={finishDaySetUp} type="button" className={s.button}>
              Finish
            </button>
          </form>
        )}
      </div>

      <Schedule />
    </div>
  );
};

export default TrainigSetUp;
