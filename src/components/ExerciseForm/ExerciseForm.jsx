import s from './exercise-form.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrainings } from 'redux/trainings/trainings-selector';
import { getExercises } from 'redux/exercises/exercises-selector';
import { useSelector } from 'react-redux';

const ExerciseForm = ({ addExercise, getName, formReset, setFormReset, setAlert }) => {
  const trainings = useSelector(getTrainings)
  const exercises = useSelector(getExercises)
  const { resetForm } = formReset;

  const [list, setList] = useState({
    fullList: [],
    filteredList: [],
  });

  const [flags, setFlags] = useState({
    isMenuOpen: false,
    isNameChoosen: false,
  });

  const [dayName, setDayName] = useState('');

  const [form, setForm] = useState({
    exercise: '',
    resistance: '',
    sets: '',
    repetitions: '',
    restInterval: '',
  });

  const { exercise, resistance, sets, repetitions, restInterval } = form;
  const { fullList, filteredList } = list;
  const { isMenuOpen, isNameChoosen } = flags;


  const toResetForm = () => {
    setForm({
      exercise: '',
      resistance: '',
      sets: '',
      repetitions: '',
      restInterval: '',
    });
    setDayName({
      name: '',
    });
    setFlags({
      isMenuOpen: false,
      isNameChoosen: false,
    });
  };

  useEffect(() => {
    if (resetForm) {
      toResetForm();
      setFormReset({
        resetForm: false,
      })
    }
    setList({
      fullList: exercises,
      filteredList: exercises,
    })
  }, [resetForm, exercises]);

  const onInput = e => {
    if (e.target.name === 'day-name') {
      setDayName(e.target.value);
      return;
    }

    setForm(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });

    if (e.target.name === 'exercise') {
      setList(prevState => {
        return {
          ...prevState,
          filteredList: fullList.filter(el =>
            el.exercise.toLowerCase().includes(e.target.value.toLowerCase())
          ),
        };
      });
    }
  };

  const closeMenu = e => {
    if (e.target.name === 'exercise') {
      return;
    }
    setFlags(prevState => {
      return {
        ...prevState,
        isMenuOpen: false,
      };
    });
  };

  const toggleMenu = e => {
    setFlags(prevState => {
      return {
        ...prevState,
        isMenuOpen: true,
      };
    });
  };

  const chooseExercise = e => {
    setForm(prevState => {
      return {
        ...prevState,
        exercise: e.target.textContent,
      };
    });
  };

  const buttonsAction = e => {
    let step = 1;
    if (e.target.id === 'restInterval') {
      step = 5;
    }
    if (e.target.title === 'increase') {
      setForm(prevState => {
        return {
          ...prevState,
          [e.target.id]: Number(form[e.target.id]) + step,
        };
      });
    } else {
      if (form[e.target.id] - step > 0) {
        setForm(prevState => {
          return {
            ...prevState,
            [e.target.id]: Number(form[e.target.id]) - step,
          };
        });
      }
    }
  };

  const submitExercise = e => {
    e.preventDefault();

    if (!exercise || !resistance || !sets || !repetitions || !restInterval) {
      setAlert({
        isAlert: true,
        type: 'alert',
        message: 'All fields must be filled'
      })
      return
    }
    addExercise({
      exercise,
      resistance,
      sets,
      repetitions,
      restInterval,
    });
    setForm({
      exercise: '',
      resistance: '',
      sets: '',
      repetitions: '',
      restInterval: '',
    });
  
  };

  const setName = () => {
    if (!dayName) {
      setAlert({
        isAlert: true,
        type: 'alert',
        message: 'You should name your training in order to continue'
      })
      return
    }
    const doesNameExist = Boolean(trainings.find(el=> el.name === dayName))
    if (doesNameExist) {
      setAlert({
        isAlert: true,
        type: 'alert',
        message: 'A training with such name already exists'
      })
      return
    }
    getName(dayName);
    setFlags(prevState => {
      return {
        ...prevState,
        isNameChoosen: true,
      };
    });
  };

  return (
    <form className={s.form} onClick={closeMenu}>
      <div className={s.formWrapper}>
        {!isNameChoosen && (
          <>
            <h3 className={s.title}>Name your training</h3>
            <div>
              <input
                name="day-name"
                onChange={onInput}
                className={s.inputField}
                type="text"
                placeholder="Your training day name"
              />
              <div className={s.commonBox}>
                <button className={s.btn} onClick={setName} type="button">
                  Create training
                </button>
              </div>
            </div>
          </>
        )}
        {isNameChoosen && (
          <>
            <h3 className={s.title}>Set your exercise</h3>
            <div>
              <div className={s.inputBox}>
                <input
                  name="exercise"
                  value={exercise}
                  onChange={onInput}
                  onClick={toggleMenu}
                  className={s.inputField}
                  type="text"
                  placeholder="Choose your exercise"
                  autoComplete="off"
                />
              </div>
              {isMenuOpen && (
                <ul className={s.menuList}>
                  {!filteredList.length && (
                    <p className={s.message}>Not Found</p>
                  )}
                  {filteredList.map(el => {
                    return (
                      <li
                        onClick={chooseExercise}
                        className={s.menuItem}
                        key={el.id}
                      >
                        {el.exercise}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className={s.commonBox}>
              <div className={s.resistanceBox}>
                <label className={s.label} htmlFor="search-bar">
                  Resistance, kg
                </label>
                <div className={s.inputWrap}>
                  <span
                    onClick={buttonsAction}
                    title="decrease"
                    id="resistance"
                    className={s.decrease}
                  >
                    -
                  </span>
                  <input
                    onChange={onInput}
                    name="resistance"
                    className={s.resistanceInput}
                    value={resistance}
                    type="number"
                    placeholder="kg"
                  />
                  <span
                    title="increase"
                    id="resistance"
                    onClick={buttonsAction}
                    className={s.increase}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className={s.commonBox}>
              <div className={s.resistanceBox}>
                <label className={s.label} htmlFor="search-bar">
                  Sets
                </label>
                <div className={s.inputWrap}>
                  <span
                    onClick={buttonsAction}
                    title="decrease"
                    id="sets"
                    className={s.decrease}
                  >
                    -
                  </span>
                  <input
                    onChange={onInput}
                    name="sets"
                    className={s.resistanceInput}
                    value={sets}
                    type="number"
                    placeholder="sets"
                  />
                  <span
                    title="increase"
                    id="sets"
                    onClick={buttonsAction}
                    className={s.increase}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className={s.commonBox}>
              <div className={s.resistanceBox}>
                <label className={s.label} htmlFor="search-bar">
                  Repetitions
                </label>
                <div className={s.inputWrap}>
                  <span
                    onClick={buttonsAction}
                    id="repetitions"
                    title="decrease"
                    className={s.decrease}
                  >
                    -
                  </span>
                  <input
                    onChange={onInput}
                    name="repetitions"
                    className={s.resistanceInput}
                    value={repetitions}
                    type="number"
                    placeholder="reps"
                  />
                  <span
                    id="repetitions"
                    title="increase"
                    onClick={buttonsAction}
                    className={s.increase}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className={s.commonBox}>
              <div className={s.resistanceBox}>
                <label className={s.label} htmlFor="search-bar">
                  Rest Interval, secs
                </label>
                <div className={s.inputWrap}>
                  <span
                    onClick={buttonsAction}
                    id="restInterval"
                    title="decrease"
                    className={s.decrease}
                  >
                    -
                  </span>
                  <input
                    onChange={onInput}
                    name="restInterval"
                    className={s.resistanceInput}
                    value={restInterval}
                    type="number"
                    placeholder="seconds"
                  />
                  <span
                    id="restInterval"
                    title="increase"
                    onClick={buttonsAction}
                    className={s.increase}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className={s.commonBox}>
              <button onClick={submitExercise} className={s.btn} type="submit">
                Add Exercise
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default ExerciseForm;
