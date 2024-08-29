import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';
import FirstScreen from './Pages/FirstScreen.jsx';
import Error from './Pages/Error.jsx';
import SecondScreen from './Pages/SecondScreen.jsx';
import Profile from './Pages/Profile.jsx';
import Agreement from './Pages/Agreement.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<FirstScreen/>}/>
      <Route path="/registration" element={<SecondScreen/>}/>
      <Route exact path="/app" element={<App/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/app/profile' element={<Profile/>}/>
      <Route path='/agreement' element={<Agreement/>}/>
    </Routes>
  </Router>
);

reportWebVitals();
