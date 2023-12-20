import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAllUsers } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../store/selectors';
import { fetchUsers } from '../store/slices';
import { AppDispatch } from '../store';

export default function UsersList() {
  const { items: users, loading, errorMessage } = useSelector(usersSelector);

  const dispatch = useDispatch<AppDispatch>();
  // const [users, setUsers] = useState<User[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [getAllUsers]);

  return (
    <div className="UsersList">
      {errorMessage && <p>{errorMessage}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <Link to={String(user.id)}>{user.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
