import s from "./modal.module.scss"
import { createPortal } from "react-dom"

const modalRoot = document.querySelector("#modalRoot")

const Modal = ({toggleModal, dayData}) => {
const {day, month, year} = dayData

return createPortal(
    <div className={s.backdrop}>
        <div className={s.modal}>
            <span onClick={toggleModal} className={s.closeBtn}>x</span>
            <h4 className={s.title}>{month} {day}, {year}</h4>

            
        </div>
    </div>,
    modalRoot
)
}

export default Modal