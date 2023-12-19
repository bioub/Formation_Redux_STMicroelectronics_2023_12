import './TopBar.css';

import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="TopBar">
      <h1>MyApp</h1>
      <Link to="/todos">Todos</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}
