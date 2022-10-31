import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Pages/Profile';
import ErorPage from './Pages/ErorPage';
import LoginForm from './Pages/LoginForm';
import ProtectedRoutes from './context/ProtectedRoutes';
import SignUp from './Pages/SignUp';
import styled from 'styled-components';
import ExerciseDetail from './Pages/ExerciseDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path={"/profile/:id"} element={<Profile />} />
          <Route path="*" element={<ErorPage />} />
        </Route >
      </Routes>
    </Router>
  );
}

const StyledNav = styled.nav`
display:flex;
justify-content: center;
height: 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1rem;
  position: relative;
  padding: 40px;
  color: white;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  
  &:focus {
    color:red;
  }
`;

export default App;
