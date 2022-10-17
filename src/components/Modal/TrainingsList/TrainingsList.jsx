import s from './trainings-list.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTraining } from 'redux/trainings/trainings-operations';
import { addScheduleItem, deleteMultipleScheduleItems } from 'redux/schedule/schedule-operations';

const TrainingList = ({
  goBack,
  openDescription,
  trainings,
  dayData,
  setAlert,
  schedule,
}) => {
  const dispatch = useDispatch();

  const [training, setTraining] = useState({
    name: '',
    time: '',
  });

  const { fullDate } = dayData;
  const { name, time } = training;

  const onChange = e => {
    setTraining({
      name: e.target.id,
      time: e.target.value,
    });
  };

  const addTrainingItem = e => {
    if (!time || time === '--:--' || (time && name !== e.target.id)) {
      setAlert({
        isAlert: true,
        type: 'alert',
        message: 'Choose your time, please',
      });
      return;
    }
    if (schedule.length > 0) {
      const trainingslist = schedule.filter(el => el.date === fullDate)
      const sameTraining = trainingslist?.find(el => el.name === name);
      const sameTime = trainingslist?.find(el => el.time === time);

      if (sameTraining) {
        setAlert({
          isAlert: true,
          type: 'alert',
          message: 'This training has already been added before',
        });
        return;
      }

      if (sameTime) {
        setAlert({
          isAlert: true,
          type: 'alert',
          message: 'This time is already taken',
        });
        return;
      }
      
    }
   
    if (e.target.id !== name) {
      return;
    }
    const training = {
      date: fullDate,
      name,
      time,
    };
    dispatch(addScheduleItem(training));
    goBack();
  };

  const removeTraining = e => {
    const id = e.target.id;
    const name = e.target.title.split(" ").join('-') 
    const removeTraining = () => deleteTraining(id)
    const updateSchedule = () => deleteMultipleScheduleItems(name)

    setAlert({
      isAlert: true,
      type: 'approval',
      message:
        'Are you sure to delete this training? All related records in your schedule will be also removed!',
      callback: [removeTraining, updateSchedule]
      
    });
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
                <div className={s.panel}>
                  <select
                    className={s.time}
                    onChange={onChange}
                    name="time"
                    id={el.name}
                  >
                    <option value="--:--">--:--</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                  </select>
                  <div className={s.btnWrapper}>
                    <span
                      onClick={addTrainingItem}
                      id={el.name}
                      className={s.addBtn}
                    >
                      Add
                    </span>
                    <span
                      onClick={removeTraining}
                      id={el._id}
                      title={el.name}
                      className={s.deleteBtn}
                    >
                      D
                    </span>
                  </div>
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
