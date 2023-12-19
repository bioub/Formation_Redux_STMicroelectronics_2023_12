import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllUsers } from './api';
import { User } from './types';

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    getAllUsers()
      .then((data) => setUsers(data))
      .catch((err) => setErrorMessage(err.message))
      .finally(() => setLoading(false));
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
