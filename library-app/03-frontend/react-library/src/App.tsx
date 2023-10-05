import React from 'react';
import './App.css';
import { Navbar } from './layouts/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='nav nav-pills m-2'>
        <div className='nav-item'>
          <a className='nav-link active'>Home</a>
        </div>
        <div className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>Product</a>
          <ul className='dropdown-menu'>
            <li className='dropdown-item ps-3'>1</li>
            <li className='dropdown-item ps-3'>1</li>
            <li className='dropdown-item ps-3'>1</li>
            <li className='dropdown-item ps-3'>1</li>
          </ul>
        </div>
        <div className='nav-item'>
          <a className='nav-link'>Personal</a>
        </div>
        <div className='nav-item'>
          <a className='nav-link disabled'>Setting</a>
        </div>
      </div>
    </div>
  );
}

export default App;
