import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import GobalContext from './GobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(

  <GobalContext>
      <App />
  </GobalContext>
  
   
  
);
