import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CreateLetterPage from './CreateLetterPage';
import DisplayLetter from './DisplayLetter';
import supabase from './supabase';
import './styles.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateLetterPage />} />
      <Route path="/display/:id" element={<DisplayLetter />} />
    </Routes>
    );
  }

  export default App