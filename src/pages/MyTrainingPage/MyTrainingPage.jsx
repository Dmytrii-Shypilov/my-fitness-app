import s from './my-training.module.scss';
import SetTrainingPage from './SetTrainingPage';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchExercises } from 'redux/exercises/exercises-operations';
import { getExercises } from 'redux/exercises/exercises-selector';
// import { Outlet, NavLink } from 'react-router-dom';

const MyTrainingPage = () => {
  const dispatch = useDispatch()
  const exercises = useSelector(getExercises)
  
  useEffect(() => {
    if (exercises.length === 0) {
      dispatch(fetchExercises())
      console.log("First fetch")
    }
  }, [exercises]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <SetTrainingPage />
      </div>
    </section>
  );
};

export default MyTrainingPage;
