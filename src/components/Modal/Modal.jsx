import s from './modal.module.scss';
import { createPortal } from 'react-dom';
import TrainingsList from './TrainingsList';
import DescriptionBlock from './DescriptionBlock';
import { getTrainings } from 'redux/trainings/trainings-selector';
import { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const modalRoot = document.querySelector('#modalRoot');

const Modal = ({ toggleModal, dayData }) => {
  const [page, setPage] = useState({
    currentPage: 'Schedule',
    prevPage: '',
  });
  const { currentPage, prevPage } = page;
  const { day, month, year } = dayData;

  const trainings = useSelector(getTrainings, shallowEqual)

  const openTrainings = () => {
    setPage(prevState => {
      return { currentPage: 'Trainings', prevPage: prevState.currentPage };
    });
  };

  const openSchedule = () => {
    setPage(prevState => {
      return { currentPage: 'Schedule', prevPage: prevState.currentPage };
    });
  };
  const openDescription = () => {
    setPage(prevState => {
      return { currentPage: 'Description', prevPage: prevState.currentPage };
    });
  };

  const goBack = () => {
    if (prevPage === 'Schedule' || currentPage === "Trainings") {
      setPage(prevState => {
        return { currentPage: 'Schedule', prevPage: prevState.currentPage };
      });
    } else if (prevPage === "Trainings") {
      setPage(prevState => {
        return { currentPage: 'Trainings', prevPage: prevState.currentPage };
      });
    } 
    
  };
  return createPortal(
    <div className={s.backdrop}>
      <div className={s.modal}>
        <span onClick={toggleModal} className={s.closeBtn}>
          x
        </span>
        <h4 className={s.title}>
          {month} {day}, {year}
        </h4>
        {currentPage === 'Schedule' && (
          <>
            <div className={s.listBlock}>
              <ul className={s.list}>
                <li onClick={openDescription} className={s.listItem}>
                  <span className={s.time}>15:30</span>
                  <span className={s.training}>Back Training (Intense)</span>
                </li>
                <li onClick={openDescription} className={s.listItem}>
                  <span className={s.time}>15:30</span>
                  <span className={s.training}>Back Training (Intense)</span>
                </li>
              </ul>
            </div>
            <div className={s.btnContainer}>
              <button onClick={openTrainings} type="button">
                Add training
              </button>
            </div>
          </>
        )}
        {currentPage === 'Trainings' && (
          <TrainingsList
          trainings={trainings}
            goBack={goBack}
            openDescription={openDescription}
            dayData={dayData}
          />
        )}
        {currentPage === 'Description' && <DescriptionBlock goBack={goBack}/>}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
