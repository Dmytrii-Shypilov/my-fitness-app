import s from './my-training.module.scss';
import { Outlet, NavLink } from 'react-router-dom';

const MyTrainingPage = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
      <div className={s.trainingNavBar}>
        <ul className={s.list}>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training">
              Trainings
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training/training-setup">
              Create training
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training">
              Exercises
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
      </div>
      
    </section>
  );
};

export default MyTrainingPage;
