import s from './my-training.module.css';

import { Outlet, NavLink } from 'react-router-dom';

import TrainigSetUp from 'components/TrainigSetUp';
import Schedule from 'components/Schedule';

const MyTrainingPage = () => {

    const data = [1,2,3]
  return (
    <section className={s.section}>
      <div className={s.trainingNavBar}>
        <ul className={s.list}>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training/training-setup">
              Set your training
            </NavLink>
          </li>
          {/* <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training/training-setup">
              Set your training
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training/training-setup">
              Set your training
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={s.link} to="/my-training/training-setup">
              Set your training
            </NavLink>
          </li> */}
        </ul>
      </div>
      {/* <h2 className={s.title}>Here you can set up and track your training routine</h2> */}

      <Outlet data={data}/>
    </section>
  );
};

export default MyTrainingPage;
