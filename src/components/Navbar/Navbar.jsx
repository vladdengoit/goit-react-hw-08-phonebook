import MainMenu from './MainMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { selectIsLogin } from '../../redux/auth/selector-auth';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // const funcUserAuthName = useSelector(selectIsUser);
  const funcAuthLogin = useSelector(selectIsLogin);

  return (
    <navbar className={styles.navbar}>
      <Link to="/">Logo</Link>
      <MainMenu />
      {funcAuthLogin ? <NavbarUser /> : <NavbarAuth />}
    </navbar>
  );
};
export default Navbar;
