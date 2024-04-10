import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RomanNumerals from './RomanNumerals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
            <Route path="/" element={<App />} />
            <Route path="/roman-numerals" element={<RomanNumerals />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();

