import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/slices/users';
import { AppDispatch } from '../store';
import { UsersSlice } from '../store/types';
import { usersSelector } from '../store/selectors';

type Props = UsersSlice & {
  onInit(): void;
};

export function UsersList({
  items: users,
  loading,
  errorMessage,
  onInit,
}: Props) {
  useEffect(() => {
    onInit();
  }, []);

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

export default function UsersListContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const usersProps = useSelector(usersSelector);

  function handleInit() {
    dispatch(fetchUsers());
  }

  return <UsersList onInit={handleInit} {...usersProps} />;
}
