import { NavLink } from 'react-router-dom';
import styles from './MainMenu/mainmanu.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selector-auth';
import menuItems from './MainMenu/menuItems';

const MainMenu = () => {
  const isLogin = useSelector(selectIsLogin);
  const checkedItems = !isLogin
    ? menuItems.filter(el => !el.private)
    : menuItems;
  const elements = checkedItems.map(({ to, text, id }) => (
    <li key={id} className={styles.link}>
      <NavLink to={to}>{text}</NavLink>
    </li>
  ));
  return <ul className={styles.menu}>{elements}</ul>;
};

export default MainMenu;
