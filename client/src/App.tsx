import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./View/common/NavBar/NavBar";
import {MainContent} from "./View/common/MainContent/MainContent";
import {Footer} from "./View/common/Fotter/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./View/common/DefaultLayout/DefaultLayout";
import {Login} from "./View/pages/Login/Login";

function App() {
  return (
      <>
          <BrowserRouter>
            {/*<DefaultLayout/>*/}
            {/*  <Login/>*/}
              <Routes>
                  <Route path="/*" Component={DefaultLayout}></Route>
                  <Route path='/login' Component={Login}></Route>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
