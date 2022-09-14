import s from './calendar.module.scss';
import { useEffect, useState } from 'react';
import { getSchedule } from 'redux/schedule/schedule-selector';
import { useSelector, shallowEqual} from 'react-redux';




const Calendar = ({toggleModal}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    ' May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const [calendar, setCalendar] = useState({
    year: null,
    month: null,
    days: null,
  });

  const { month, days, year } = calendar;

  const trainingSession = useSelector(getSchedule, shallowEqual)

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const days = new Date(year, month + 1, 0).getDate();

    setCalendar({
      month,
      year,
      days,
    });
  }, []);

  const renderMarkup = () => {
    const today = new Date();
    const firstDay = new Date(year, month, 1);
    const weekday = firstDay.toLocaleDateString('en-us', {
      weekday: 'long',
    });
    const padding = weekdays.indexOf(weekday);
    let markup = [];
    for (let i = 1; i <= 42; i++) {
      if (i < padding + 1) {
        markup.push(<div className={s.padDay}></div>);
      } else if (i >= padding && i < days + padding + 1) {
        const DayClassName =
          today.toLocaleDateString() === `${month + 1}/${i - padding}/${year}`
            ? `${s.currentDay}`
            : `${s.day}`;
        const iconClassName =
          today.toLocaleDateString() === `${month + 1}/${i - padding}/${year}`
            ? `${s.currentDayIcon}`
            : `${s.dayIcon}`;
            const training = trainingSession.find(el => el.date === `${i - padding}/${month + 1}/${year}`)
        markup.push(
          <div
            onClick={toggleModal}
            className={DayClassName}
            id={`${i - padding}/${month + 1}/${year}`}
          >
            <span className={iconClassName}>{i - padding}</span>
            {training && training.trainings.map(el=> {
              return <div className={s.training}>{el.name}</div>
            })}
          </div>
        );
      }
      //  else {
      //   markup.push(<div className={s.day}></div>);
        
      // }
    }
    return markup;
  };

  const nextMonth = e => {
    setCalendar(prevState => {
      return {
        ...prevState,
        month: month + 1,
        days: new Date(year, month + 2, 0).getDate(),
      };
    });
    if (month === 11) {
      setCalendar(prevState => {
        return {
          ...prevState,
          month: 0,
          year: year + 1,
          days: new Date(year, month + 2, 0).getDate(),
        };
      });
    }
  };

  const prevMonth = () => {
    setCalendar(prevState => {
      return {
        ...prevState,
        month: month - 1,
        days: new Date(year, month, 0).getDate(),
      };
    });
    if (month === 0) {
      setCalendar(prevState => {
        return {
          ...prevState,
          month: 11,
          year: year - 1,
          days: new Date(year, month + 1, 0).getDate(),
        };
      });
    }
  };

  // const addContent = e => {
  //   e.target.insertAdjacentHTML('afterbegin', `<p>${e.target.id}</p>`);
  // };

  return (
    <div className={s.calendarBody}>
      <span className={s.dateBtn} onClick={prevMonth}>
        back
      </span>
      <span className={s.title}>
        {months[month]} {year}
      </span>
      <span className={s.dateBtn} onClick={nextMonth}>
        next
      </span>
      <div className={s.headRow} id="head">
        <div className={s.headColumn} id="c1">
          Monday
        </div>
        <div className={s.headColumn} id="c2">
          Tuesday
        </div>
        <div className={s.headColumn} id="c3">
          Wednesday
        </div>
        <div className={s.headColumn} id="c4">
          Thursday
        </div>
        <div className={s.headColumn} id="c5">
          Friday
        </div>
        <div className={s.headColumn} id="c6">
          Saturday
        </div>
        <div className={s.headColumn} id="c7">
          Sunday
        </div>
      </div>
      <div className={s.calendarDays}>{renderMarkup(days)}</div>
    </div>
    
  );
};

export default Calendar;
