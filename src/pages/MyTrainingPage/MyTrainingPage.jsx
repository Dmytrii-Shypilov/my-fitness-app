import s from './my-training.module.scss';

import { Outlet, NavLink } from 'react-router-dom';

// import TrainigSetUp from 'components/TrainigSetUp';
// import Schedule from 'components/Schedule';

const MyTrainingPage = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
      <div className={s.trainingNavBar}>
        <ul className={s.list}>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training">
              Your data
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training/training-setup">
              Set your training
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training">
              Exercises
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <h2 className={s.title}>Here you can set up and track your training routine</h2> */}

      <Outlet />
      </div>
      
    </section>
  );
};

export default MyTrainingPage;
