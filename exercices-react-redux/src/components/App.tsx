import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Todos from '../todos/Todos';
import Users from '../users/Users';
import TopBar from './TopBar';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
