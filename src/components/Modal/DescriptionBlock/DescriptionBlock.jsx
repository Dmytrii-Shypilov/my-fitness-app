import s from './description-block.module.scss'
import { useSelector, shallowEqual } from 'react-redux'
import { getTrainings } from 'redux/trainings/trainings-selector'

const DescriptionBlock = ({goBack}) => {
  const trainings = useSelector(getTrainings, shallowEqual)
    return (
      <div className={s.listBlock}>
        <ul className={s.list}>
          <li className={s.listItem}>
            <span className={s.name}></span><span className={s.parameters}></span> 
          </li>
        </ul>
        <div className={s.btnContainer}>
            <button className={s.btn} onClick={goBack} >Back</button>
        </div>
      </div>  
    )
}

export default DescriptionBlock