import React from 'react';
import logo from './img/tier-logo.svg';
import './css/App.css';
import ShortenUrlForm from './components';

const App = () => (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Change mobility for good</p>
        <ShortenUrlForm />
    </div>
);

export default App;
