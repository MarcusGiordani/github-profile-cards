import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import TailwindProfile from './pages/TailwindProfile';
import StyledProfile from './pages/StyledProfile';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tailwind" element={<TailwindProfile />} />
        <Route path="/styled" element={<StyledProfile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
