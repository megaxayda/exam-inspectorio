import './App.css';

import Home from 'pages/Home';
import Person from 'pages/Person';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="person">
        <Route path=":id" element={<Person />} />
      </Route>
    </Routes>
  );
}

export default App;
