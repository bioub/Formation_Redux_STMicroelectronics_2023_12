import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from './types';
import { getUserById } from './api';

export default function UsersShow() {
  const params = useParams();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    getUserById(Number(params.id))
      .then((data) => setUser(data))
      .catch((err) => setErrorMessage(err.message))
      .finally(() => setLoading(false));
  }, [getUserById, params.id]);

  return (
    <div className="UsersShow">
      {errorMessage && <p>{errorMessage}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{user?.name}</h2>
          <h3>Phone</h3>
          <p>{user?.phone}</p>
          <h3>Email</h3>
          <p>{user?.email}</p>
          <h3>Address</h3>
          <p>
            {user?.address?.street}
            <br />
            {user?.address?.city}
            {user?.address?.zipcode}
          </p>
        </>
      )}
    </div>
  );
}
