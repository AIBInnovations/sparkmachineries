import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivacyPolicy from './PrivacyPolicy';
import TicTacToe from './TicTacToe';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<TicTacToe />}/>
      </Routes>
    </Router>
  );
}
 
export default App;
