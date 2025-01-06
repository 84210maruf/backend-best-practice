import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HandleCng from './HandleCng';
import MemorizeFn from './MemorizeFn';
import UserApp from './userContext';
import RiskeyComponant from './MountUnmountComponent/riskeyComponant';
import SafeComponant from './MountUnmountComponent/safeComponant';

import UseStateHooks from './Hook/UseStateHooks';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <HandleCng />
    <MemorizeFn />
    <UserApp/>
    <RiskeyComponant/>
    <SafeComponant />
    <UseStateHooks />
  </React.StrictMode>
);

reportWebVitals();
