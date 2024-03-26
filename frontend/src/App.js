import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Components/Authentication/SignUp';
import HomePage from './Components/Home/HomePage';
import NavBar from './Components/Navigation/NavBar';
function App() {
  return (
    <div>
      <NavBar /> 
      <Routes>
        <Route  path="/" element={<HomePage/>} />
         <Route path="/home" element={<HomePage/>} />
         <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
