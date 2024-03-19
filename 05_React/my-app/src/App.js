import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import WordInput from "./pages/Input";
import Input2 from "./pages/input2";
import UserList from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
          |  <Link to="/about">About</Link>
          |   <Link to="/counter">Counter</Link>
          |   <Link to="/input">WordInput</Link>
          |   <Link to="/input2">Input2</Link>
          |   <Link to="/userList">UserList</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<WordInput />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/userList" element={<UserList />} />
      </Routes>

    </div>

  );
}

export default App;
