import s from './auth-page.module.scss';
import AuthorizationForm from 'components/AuthorizationForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/user/user-selector';
import { useNavigate } from 'react-router-dom';

const AuthorizationPage = () => {
  const navigate = useNavigate();
  const user = useSelector(getUser);
  useEffect(() => {
    if (user.token) {
      navigate('/');
    } 
  }, [user.token]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.textBlock}>
            <h1 className={s.title}>ScienceFit</h1>
            <p className={s.text}>Get your fitness routine organized</p>
          </div>
          <AuthorizationForm />
        </div>
      </div>
    </section>
  );
};

export default AuthorizationPage;
