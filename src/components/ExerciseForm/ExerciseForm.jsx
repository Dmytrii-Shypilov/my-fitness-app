import s from './exercise-form.module.scss';
import { exerciseData } from 'database/exercises';
import { useState } from 'react';

const ExerciseForm = () => {
  const [list, setList] = useState({
    fullList: exerciseData,
    filteredList: exerciseData,
  });

  const [form, setForm] = useState({
    isMenuOpen: false,
    exercise: '',
    resistance: '',
    sets: '',
    repetitions: '',
  });

  const onInput = e => {
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
    setForm(prevState => {
      return {
        ...prevState,
        isMenuOpen: false,
      };
    });
  };
  const toggleMenu = e => {
    setForm(prevState => {
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
    console.log(form[e.target.id])
    if (e.target.title === 'increase') {
      setForm(prevState => {
        return {
          ...prevState,
          [e.target.id]: Number(form[e.target.id]) + 1,
        };
      });
    } else {
      if (form[e.target.id] > 1) {
        setForm(prevState => {
          return {
            ...prevState,
            [e.target.id]: Number(form[e.target.id]) - 1,
          };
        });
      }
     
    }
  };

  const { isMenuOpen, exercise, resistance, sets, repetitions } = form;
  const { fullList, filteredList } = list;

  return (
    <form className={s.form} onClick={closeMenu}>
      <div className={s.formWrapper}>
        <h3 className={s.title}>Set your exercise</h3>
        <div>
          <div className={s.inputBox}>
            <input
              name="exercise"
              value={exercise}
              onChange={onInput}
              onClick={toggleMenu}
              className={s.searchBar}
              type="text"
              placeholder="Choose your exercise"
              autoComplete="off"
            />
          </div>
          {isMenuOpen && (
            <ul className={s.menuList}>
              {!filteredList.length && <p className={s.message}> Not Found</p>}
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
              Resistance
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
                placeholder="Enter kg"
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
                placeholder="Enter kg"
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
                placeholder="Enter kg"
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
      </div>
    </form>
  );
};

export default ExerciseForm;
