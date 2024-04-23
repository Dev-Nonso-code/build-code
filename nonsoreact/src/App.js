import React from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './component/Body component/Api';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
// import Formikform from './component/Body component/Formikform';

function App() {
  return (
    <> 
    <Routes>

      <Route>
      <Route path='/Api' element={<Api />} />
      </Route>

    </Routes>
    </>
  );
}

export default App;
