import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import { UserContext } from './contexts';

import './App.css';
import UserDetails from './pages/UserDetails/UserDetails';
import UserList from './pages/UserList';

function App() {
  const [seenUsers, setSeenUsers] = useState([]);
  return (
    <UserContext.Provider value={{ seenUsers, setSeenUsers }}>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
