import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { selectUser } from './features/uesrSlice';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
  // const [Obj, setObj] = useState({});
  // let obj;
  // const getObj = (object) => {
  //   obj = object;
  //   setObj(obj);
  // };
  const user = useSelector(selectUser);
  useEffect(() => {
    console.log('user is ', user);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          // exact
          path='/'
          element={user !== null ? <Dashboard /> : <Home />}
        />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
