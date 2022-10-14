import { NavLink } from 'react-router-dom';
import s from './header.module.scss';
import logo from './logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/user/user-selector';
import { logOutUser } from 'redux/user/user-operations';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const Header = () => {
  const dispatch = useDispatch();
  const { email, token } = useSelector(getUser);

  const logOut = () => {
    dispatch(logOutUser(token));
    localStorage.clear();
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerWrapper}>
          <div className={s.navPanel}>
            <div className={s.logo}>
              <img className={s.image} src={logo} alt="logo" />
            </div>
            <nav>
              <ul className={s.list}>
                {token && (
                  <>
                    <li className={s.listItem}>
                      <NavLink to="/" className={getClassName}>
                        Home
                      </NavLink>
                    </li>
                    <li className={s.listItem}>
                      <NavLink to="/my-training" className={getClassName}>
                        My Trainings
                      </NavLink>
                    </li>
                    <li className={s.listItem}>
                      <NavLink to="/my-diet" className={getClassName}>
                        Calendar
                      </NavLink>
                    </li>
                  </>
                )}
                {!token && <li className={s.listItem}>
                  <NavLink to="/authorization" className={getClassName}>
                    Authorization
                  </NavLink>
                </li>}
              </ul>
            </nav>
          </div>

          {token && (
            <div className={s.userPanel}>
              <span className={s.userName}>{email}</span>
              <span className={s.btn} onClick={logOut}>
                Log out
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
