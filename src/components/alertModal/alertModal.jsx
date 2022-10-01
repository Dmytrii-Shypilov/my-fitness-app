import s from './alert-modal.module.scss';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modalRoot');

const alertModal = () => {
  createPortal(
    <div className={s.modal}>
      <p className={s.message}>Are you sure to finish the process</p>
      <div className={s.btnContainer}>
        <button className={s.btn}>Yes</button>
        <button className={s.btn}>No</button>
      </div>
      <div className={s.btnContainer}>
        <button className={s.btn}>Ok</button>
      </div>
    </div>,
    modalRoot
  );
};

export default alertModal;
