import s from './description-block.module.scss'


const DescriptionBlock = ({goBack}) => {
    return (
      <div>
        <div>
            <button onClick={goBack} >Back</button>
        </div>
      </div>  
    )
}

export default DescriptionBlock