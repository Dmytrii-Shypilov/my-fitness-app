import s from './trainings-list.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTraining } from 'redux/schedule/schedule-slice';


const TrainingList = ({ goBack, openDescription, trainings, dayData }) => {
  const[time, setTime] = useState('');
  const { fullDate } = dayData;
  const dispatch = useDispatch()
  
  const onChange = (e) => {
    setTime(`${e.target.value}`)
  }

  const addTrainingItem = (e) => {
    const training = {
        date: fullDate,
        name: e.target.id,
        time: time
    }
    dispatch(addTraining(training))
    goBack()
  }

  return (
    <>
      <div className={s.listBlock}>
        <ul className={s.list}>
          {trainings.map(el => {
            return (
              <li className={s.listItem}>
                <span id={el.name} className={s.training} onClick={openDescription}>{el.name}</span>
                <select className={s.time} onChange={onChange} name="time" id="time" >
                    <option value="15:30">15:30</option>
                    <option value="16:30">16:00</option>
                </select>
                <span onClick={addTrainingItem} id={el.name} className={s.addBtn}>
                  Add
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.btnContainer}>
        <button onClick={goBack} type="button">
          Back
        </button>
      </div>
    </>
  );
};

export default TrainingList;
