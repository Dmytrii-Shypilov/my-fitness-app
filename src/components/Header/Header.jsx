import { NavLink } from 'react-router-dom';
import s from './header.module.scss';
import logo from './logo.png';

const getClassName = ({isActive}) => {
  return isActive ? `${s.link} ${s.active}` : s.link
}

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img className={s.image} src={logo} alt="logo" />
        </div>
        <nav>
          <ul className={s.list}>
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
              <NavLink to="/my-diet" className={getClassName}>Calendar</NavLink>
            </li>
            <li className={s.listItem}>
              <NavLink to="/blog" className={getClassName}>Blog</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
