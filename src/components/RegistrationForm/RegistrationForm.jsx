import { useState, useId } from 'react';
import styles from './registrationform.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = ({ handlerForm }) => {
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

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const { name, email, password } = state;

  return (
    <form onSubmit={handlerFormSubmit}>
      <div className={styles.block}>
        <label>Name :</label>
        <input
          name="name"
          value={name}
          id={nameId}
          required
          onChange={handleChange}
        />
      </div>
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
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;
