import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Navbar from './Navbar.jsx'; // Corrected import
import First from './First.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar/>
      {/* <First/> */}
    </>
  </React.StrictMode>
);
