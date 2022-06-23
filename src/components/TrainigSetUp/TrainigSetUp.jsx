import s from './training-setup.module.css'
import Schedule from 'components/Schedule';

import { exerciseData } from 'database/exercises';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const TrainigSetUp = ({data}) => {
console.log(data)
  return (
    <div className={s.container}>
        
        <div className={s.section}>
        <h3 className={s.title}>Set up your training schedule</h3>
      <form action="">
        <label className={s.label} htmlFor="">
          <span className={s.info}>Training day</span>
          <select name="" id="">
            {days.map((day)=> <option value={day}>{day}</option>)}
          </select>
        </label>

        <div>
          <label className={s.label} htmlFor="">
            <span className={s.info}>Exercise</span>
            <select name="" id="">
                {exerciseData.map((ex)=> 
                {const {exercise} = ex
                return <option value={exercise}>{exercise}</option>})}
            </select>
          </label>
          <label className={s.label} htmlFor="">
            <span className={s.info}>Resistance</span>
            <input type="number" />
          </label>
          <label className={s.label} htmlFor="">
            <span className={s.info}>Sets</span>
            <input type="number" />
          </label>
          <label className={s.label} htmlFor="">
            <span className={s.info}>Reps per set</span>
            <input type="number" />
          </label>
          <label className={s.label} htmlFor="">
            <span className={s.info}>Rest Interval</span>
            <input type="number" />
          </label>
        </div>
        <button type="submit" className={s.button}>Add Exercise</button>
        <button type="button" className={s.button}>Finish</button>
      </form>
      </div>

      <Schedule/>
    </div>  
  );
};

export default TrainigSetUp
