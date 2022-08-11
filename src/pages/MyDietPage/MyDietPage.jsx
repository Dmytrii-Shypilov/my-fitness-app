import s from './my-diet.module.scss'
import Calendar from 'components/Calendar';

const MyDietPage = () => {
  return (
    <div className={s.section}>
      <h2 className={s.title}>My Diet page</h2>
      <Calendar/>
    </div>
  );
};

export default MyDietPage;
