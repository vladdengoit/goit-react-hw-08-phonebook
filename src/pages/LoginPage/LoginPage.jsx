import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
  selectIsLogin,
} from '../../redux/auth/selector-auth';
import { operationsLogin } from '../../redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const funcAuthLoading = useSelector(selectAuthLoading);
  const funcAuthError = useSelector(selectAuthError);
  const funcAuthLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(operationsLogin(data));
  };
  if (funcAuthLogin) {
    return <Navigate to="/my-form" />;
  }
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm handlerForm={handleLogin} />
      {funcAuthLoading && (
        <p>Please...Waiting untill registration in process</p>
      )}
      {funcAuthError && <p style={{ color: 'darkred' }}>{funcAuthError}</p>}
    </div>
  );
};
export default LoginPage;
