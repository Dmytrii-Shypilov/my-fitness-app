import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import MyTrainingPage from 'pages/MyTrainingPage';
import MyDietPage from 'pages/MyDietPage';
import TrainigSetUp from './TrainigSetUp';
import HomePage from 'pages/HomePage';
import BlogPage from 'pages/BlogPage';

export const App = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/my-training" element={<MyTrainingPage />}>
            <Route path="training-setup" element={<TrainigSetUp />}></Route>
          </Route>
          <Route path="/my-diet" element={<MyDietPage />}></Route>
          <Route path="/blog" element={<BlogPage/>}></Route>
          <Route path="*" element={<HomePage/>} replace></Route>
        </Routes>
      </Suspense>
    </>
  );
};
