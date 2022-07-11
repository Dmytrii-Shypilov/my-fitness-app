import { createContext } from 'react';
import { useState } from 'react';

export const scheduleContext = createContext([]);

const ScheduleContext = ({ children }) => {
  const [schedule, setSchedule] = useState([
    { day: 'Monday', exercises: [] },
    { day: 'Tuesday', exercises: [] },
    { day: 'Wednesday', exercises: [] },
    { day: 'Thursday', exercises: [] },
    { day: 'Friday', exercises: [] },
    { day: 'Saturday', exercises: [] },
    { day: 'Sunday', exercises: [] },
  ]);
  
 

  const addExercise = (exercise, day) => {
    const newArrray = schedule.map(element => {
      if (element.day === day) {
        element.exercises.push(exercise);
      }
      return element;
    });
    setSchedule(newArrray);
  };

  const removeExercise = id => {
    const newList = schedule.filter(ex => ex.id !== id);
    setSchedule(newList);
  };

  return (
    <scheduleContext.Provider value={{ schedule, addExercise, removeExercise }}>
      {children}
    </scheduleContext.Provider>
  );
};

export default ScheduleContext;
