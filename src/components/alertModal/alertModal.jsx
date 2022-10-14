import s from './alert-modal.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modalRoot');

const AlertModal = ({ alert, setAlert }) => {
  const { isAlert, type, message } = alert;
  const openModal = () => {
    setAlert({
      isAlert: true,
    })
  };

  const closeModal = () => {
    setAlert({
      isAlert: false,
      type: '',
      message: '',
    })
  }

  return createPortal(
    <div className={s.backdrop}>
      <div className={s.modal}>
        <p className={s.message}>{message}</p>
        {type !== 'alert' ? (
          <div className={s.btnContainer}>
            <button className={s.btn}>Yes</button>
            <button className={s.btn}>No</button>
          </div>
        ) : (
          <div className={s.btnContainer}>
            <button onClick={closeModal} className={s.btn}>
              Ok
            </button>
          </div>
        )}
      </div>
    </div>,
    modalRoot
  );
};

export default AlertModal;
