import styles from './navbaruser.module.css';
import { selectIsUser } from '../../../redux/auth/selector-auth';
import { useSelector, useDispatch } from 'react-redux';
import { operationsLogOut } from '../../../redux/auth/auth-operations';

const NavbarUser = () => {
  const data = useSelector(selectIsUser);
  const name = data.name;
  // const name = 'Test';
  const dispatch = useDispatch();
  const logOut = () => dispatch(operationsLogOut());

  return (
    <div className={styles.block}>
      {name}
      <button className={styles.button} onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};
export default NavbarUser;
