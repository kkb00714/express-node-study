
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './Register';

function Main() {
  return (
    <div className="App">
      <h2>메인 페이지</h2>
      <Link to="/register">회원가입 페이지로 이동</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} /> 
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
