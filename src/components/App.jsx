import AppRoutes from '../AppRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { operationsCurrentUser } from '../redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operationsCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
