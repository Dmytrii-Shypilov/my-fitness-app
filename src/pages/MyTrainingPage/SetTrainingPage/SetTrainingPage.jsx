import s from './set-training.module.scss';
import { useState } from 'react';

import ExerciseForm from 'components/ExerciseForm';
import TrainingDay from 'components/TrainingDay';

const SetTrainingPage = () => {
  const [day, setDay] = useState({
    name: '',
    exercises: [],
  });

  const [formReset, setFormReset] = useState({ resetForm: false });

  const addExercise = exercise => {
    setDay(prevState => {
      return {
        ...prevState,
        exercises: [...prevState.exercises, exercise],
      };
    });
  };

  const resetTraining = () => {
    setDay({
      name: '',
      exercises: [],
    });
    setFormReset({
      resetForm: !formReset.resetForm,
    });
  };
  const setDayName = name => {
    setDay(prevState => {
      return {
        ...prevState,
        name,
      };
    });
  };
  return (
    <div className={s.container}>
      <div>
        <ExerciseForm
          addExercise={addExercise}
          getName={setDayName}
          formReset={formReset}
          setFormReset={setFormReset}
        />
      </div>
      <div>
        <TrainingDay trainingDay={day} resetTraining={resetTraining} />
      </div>
    </div>
  );
};

export default SetTrainingPage;
