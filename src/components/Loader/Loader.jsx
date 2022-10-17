import s from './loader.module.scss';
import image from '../../images/dumbel.png'

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <div className={s.wrapper}>
        <div className={s.spinner}></div>
        <img className={s.image} src={image} alt="" />
      </div>
    </div>
  );
};

export default Loader;
