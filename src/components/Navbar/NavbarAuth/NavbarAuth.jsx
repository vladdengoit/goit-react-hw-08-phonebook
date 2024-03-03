import { NavLink } from 'react-router-dom';
import styles from './navbarauth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.block}>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      |
      <NavLink className={styles.link} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
