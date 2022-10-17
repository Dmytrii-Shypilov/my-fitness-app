import s from './calendar-page.module.scss';
import { useState } from 'react';
import Calendar from 'components/Calendar';
import Modal from 'components/Modal';
import AlertModal from 'components/AlertModal/AlertModal';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSchedule } from 'redux/schedule/schedule-operations';

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
  const dispatch = useDispatch()
  const [modal, setModal] = useState({
    isModalOpen: false,
  });
  const [dayData, setDayData] = useState({
    fullDate: '',
    day: '',
    month: '',
    year: '',
  });
  const [period, setPeriod] = useState('')
  const [alert, setAlert] = useState({
    isAlert: false,
    type: '',
    message: '',
    callback: null
  });

  const { isAlert, type, message } = alert;

  const getDayData = date => {
    const [day, monthFig, year] = date.split('.');
    const month = months[monthFig - 1];
    setDayData({
      fullDate: date,
      day,
      month,
      year,
    });
  };

  const toggleModal = e => {
    getDayData(e.currentTarget.id);
    setModal({
      isModalOpen: !modal.isModalOpen,
    });
  };

  useEffect(()=>{
    if(period) {
      dispatch(fetchSchedule(period))
    }
    
  }, [period])

  return (
    <>
      <div className={s.section}>
        <div className={s.container}>
          <Calendar toggleModal={toggleModal} setPeriod={setPeriod} />
        </div>
      </div>
      {modal.isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          dayData={dayData}
          setAlert={setAlert}
        />
      )}
      {isAlert && <AlertModal alert={alert} setAlert={setAlert} callback={alert.callback} />}
    </>
  );
};

export default CalendarPage;
