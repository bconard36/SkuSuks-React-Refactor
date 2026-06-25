import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import './Styles/textStyles.css';
import './Styles/navbar.css';
import './Styles/imageCycler.css';
import './Styles/pages.css';
import './Styles/contact.css';
import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

