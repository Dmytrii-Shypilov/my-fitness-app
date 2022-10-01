import s from './calendar-page.module.scss';
import { useState } from 'react';
import Calendar from 'components/Calendar';
import Modal from 'components/Modal';

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

const CalendarPage = () => {
const [modal, setModal] = useState({
  isModalOpen: false
})
const [dayData, setDayData] = useState({
  fullDate: '',
  day: '',
  month: '',
  year: '',
})

const getDayData = (date) => {
  const [day, monthFig, year] = date.split('/')
  const month = months[monthFig - 1]
  setDayData({
    fullDate: date,
    day,
    month,
    year
  })
}

const toggleModal = (e) => {
  getDayData(e.currentTarget.id)
  setModal({
    isModalOpen: !modal.isModalOpen,
  })
}
  return (
    <>
      <div className={s.section}>
        <h2 className={s.title}>Calendar</h2>
        <Calendar toggleModal={toggleModal}/>
      </div>
     {modal.isModalOpen && <Modal toggleModal={toggleModal} dayData={dayData}/>}
    </>
  );
};

export default CalendarPage;
