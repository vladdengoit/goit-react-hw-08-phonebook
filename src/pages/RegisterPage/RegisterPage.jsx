import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAuthLoading,
  selectAuthError,
  selectIsLogin,
} from '../../redux/auth/selector-auth';
import { operationsAuth } from '../../redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const funcAuthLoading = useSelector(selectAuthLoading);
  const funcAuthError = useSelector(selectAuthError);
  const funcAuthLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleAuth = data => {
    dispatch(operationsAuth(data));
  };
  if (funcAuthLogin) {
    return <Navigate to="/my-form" />;
  }

  return (
    <main>
      {funcAuthLoading && (
        <p>Please...Waiting untill registration in process</p>
      )}
      <h1>Sign Up please!!!</h1>
      <RegistrationForm handlerForm={handleAuth} />
      {funcAuthError && <p style={{ color: 'darkred' }}>{funcAuthError}</p>}
    </main>
  );
};
export default RegisterPage;
