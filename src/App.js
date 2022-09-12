import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import React, { useContext, useState } from 'react';
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";


function App(props) {
  const {darkMode} = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }
  console.log(currentUser)

  return (
    <div className={darkMode ? "app dark": "app"}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='login' element={< Login />} />
          <Route index element={
            <RequireAuth>
              < Home />
            </RequireAuth>
          } />
        </Route>
        <Route path="users">
          <Route index element={
            <RequireAuth>
            < List />
          </RequireAuth>
        } />
          <Route path=':userId' element={
            <RequireAuth>
             < Single />
          </RequireAuth>
        } />
          <Route path='new' element={
            <RequireAuth>
              < New inputs={userInputs} title='Add new User' />
            </RequireAuth>
          } />
        </Route>
        <Route path="products">
          <Route index element={
            <RequireAuth>
              < List />
            </RequireAuth>    
        } />
          <Route path=':userId' element={
            <RequireAuth>
              < Single />
            </RequireAuth>
        } />
          <Route path='new' element={
            <RequireAuth>
              < New inputs={productInputs} title="Add new Product" />
            </RequireAuth>
          } />
        </Route>
      </Routes>
      </BrowserRouter>
      </div>
      );
}

export default App;
