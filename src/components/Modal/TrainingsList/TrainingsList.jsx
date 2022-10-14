import s from './trainings-list.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTraining } from 'redux/schedule/schedule-slice';

const TrainingList = ({
  goBack,
  openDescription,
  trainings,
  dayData,
  setAlert,
  schedule,
}) => {
  const [time, setTime] = useState('');
  const { fullDate } = dayData;
  const dispatch = useDispatch();

  const onChange = e => {
    setTime(`${e.target.value}`);
  };

  const addTrainingItem = e => {
    const trainingslist = schedule.find(el => el.date === fullDate)?.trainings;
    const sameTraining = trainingslist?.find(el => el.name === e.target.id);
    const sameTime = trainingslist?.find(el=> el.time === time)
    if(time === "" || time === "--:--") {
      setAlert({
        isAlert: true,
        type: 'alert',
        message: 'Choose your time, please',
      })
      return
    }
    if(sameTime) {
      setAlert({
        isAlert: true,
        type: 'alert',
        message: 'This time is already taken',
      })
     return
    }
    if (sameTraining) {
      setAlert({
        isAlert: true,
        type: 'alert',
        message: 'This training has already been added before',
      });
      return;
    }

    const training = {
      date: fullDate,
      name: e.target.id,
      time: time,
    };
    dispatch(addTraining(training));
    goBack();
  };

  return (
    <section>
      <div className={s.listBlock}>
        <ul className={s.list}>
          {trainings.map(el => {
            return (
              <li className={s.listItem}>
                <span
                  id={el.name}
                  className={s.training}
                  onClick={openDescription}
                >
                  {el.name}
                </span>
                <div>
                <select
                  className={s.time}
                  onChange={onChange}
                  name="time"
                  id="time"
                ><option value="--:--">--:--</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                  <option value="16:00">16:00</option>
                </select>
                <span
                  onClick={addTrainingItem}
                  id={el.name}
                  className={s.addBtn}
                >
                  Add
                </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.btnContainer}>
        <button onClick={goBack} className={s.btn} type="button">
          Back
        </button>
      </div>
    </section>
  );
};

export default TrainingList;
