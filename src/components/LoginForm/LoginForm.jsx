import { useState, useId } from 'react';
import styles from './loginform.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ handlerForm }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const inputValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: inputValue,
    });
  };
  const handlerFormSubmit = e => {
    e.preventDefault();
    handlerForm({ ...state });
    reset();
  };

  const reset = () => {
    setState(INITIAL_STATE);
  };

  const emailId = useId();
  const passwordId = useId();
  const { email, password } = state;

  return (
    <form onSubmit={handlerFormSubmit}>
      <div className={styles.block}>
        <label>Email :</label>
        <input
          name="email"
          value={email}
          type="email"
          id={emailId}
          required
          onChange={handleChange}
        />
      </div>
      <div className={styles.block}>
        <label>Password</label>
        <input
          name="password"
          value={password}
          type="password"
          id={passwordId}
          required
          onChange={handleChange}
        />
      </div>
      <button type="submit">LOgIN</button>
    </form>
  );
};
export default LoginForm;
