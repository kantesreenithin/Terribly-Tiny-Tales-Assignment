import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import Blog from './components/post';
function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Blog/>
    </div>
  );
}

export default App;
