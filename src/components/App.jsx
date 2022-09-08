import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import ScheduleContext from 'context/scheduleContext';
import MyTrainingPage from 'pages/MyTrainingPage';
import CalendarPage from 'pages/CalendarPage';
import SetTrainingPage from 'pages/MyTrainingPage/SetTrainingPage';
import HomePage from 'pages/HomePage';
import BlogPage from 'pages/BlogPage';

export const App = () => {
  return (
    <>
      <Header />
      <Suspense> 
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
            <Route path="/my-training" element={<MyTrainingPage />}>
              <Route path="training-setup" element={<SetTrainingPage />}></Route>
            </Route>
          <Route path="/my-diet" element={<CalendarPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="*" element={<HomePage replace />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
