import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrainings } from 'redux/trainings/trainings-operations';
import { getTrainings } from 'redux/trainings/trainings-selector';
import MyTrainingPage from 'pages/MyTrainingPage';
import CalendarPage from 'pages/CalendarPage';
import HomePage from 'pages/HomePage';
import BlogPage from 'pages/BlogPage';
import AuthorizationPage from 'pages/AuthorizationPage';
import Footer from './Footer';
import { getCurrentUser } from 'redux/user/user-operations';
import { useNavigate } from 'react-router-dom';
import { getUser } from 'redux/user/user-selector';


export const App = () => {
  const trainings = useSelector(getTrainings);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {token} = useSelector(getUser)

  useEffect(()=> {
    if (!token) {
      navigate('/authorization')
    }
    if (trainings.length === 0 && token) {
      dispatch(fetchTrainings(token));
    }
  }, [trainings, token])

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      dispatch(getCurrentUser(user.token))
    }
 
  })

  return (
    <>
      <Header/>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/my-training" element={<MyTrainingPage />} />
          <Route path="/my-diet" element={<CalendarPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="*" element={<HomePage replace />}></Route>
          <Route path="/authorization" element={<AuthorizationPage/>}></Route>
        </Routes>
      </Suspense>
      <Footer/>
    </>
  );
};
