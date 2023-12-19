import './Users.css';

import { Route, Routes } from 'react-router-dom';

import UsersList from './UsersList';
import UsersShow from './UsersShow';

export default function Users() {
  return (
    <div className="Users">
      <aside>
        <UsersList />
      </aside>
      <main>
        <Routes>
          <Route path=":id" element={<UsersShow />} />
        </Routes>
      </main>
    </div>
  );
}
