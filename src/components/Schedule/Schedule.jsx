import s from './schedule.module.scss';
import { useContext } from 'react';
import { scheduleContext } from 'context/scheduleContext';
import Day from './Day';

const Schedule = () => {
  const { schedule } = useContext(scheduleContext);
  const monday = schedule.find(el => el.day === 'Monday');
  const tuesday = schedule.find(el => el.day === 'Tuesday');
  const wednesday = schedule.find(el => el.day === 'Wednesday');
  const thursday = schedule.find(el => el.day === 'Thursday');
  const friday = schedule.find(el => el.day === 'Friday');
  const saturday = schedule.find(el => el.day === 'Saturday');
  const sunday = schedule.find(el => el.day === 'Sunday');
  const week = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

  return (
    <div className={s.section}>
      <h3 className={s.title}>Schedule</h3>
      <div className={s.schedule}>
        {week.map(day => {
          if (day.exercises.length > 0) {
            return <Day date={day}></Day>;
          }
        })}
        {/* {monday.exercises.length > 0 && <Day date={monday}></Day>}
        {tuesday.exercises.length > 0 && <Day date={tuesday}></Day>}
        {wednesday.exercises.length > 0 && <Day date={wednesday}></Day>}
        {thursday.exercises.length > 0 && <Day date={thursday}></Day>}
        {friday.exercises.length > 0 && <Day date={friday}></Day>}
        {saturday.exercises.length > 0 && <Day date={saturday}></Day>}
        {sunday.exercises.length > 0 && <Day date={sunday}></Day>} */}
      </div>
    </div>
  );
};

export default Schedule;
