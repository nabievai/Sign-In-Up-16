import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInForm from './pages/LogIn';
import SignUpForm from './pages/SignUp';
import styles from './App.module.scss';

const App = () => {
  return (
    <Router>
      <div className={styles['container']}>
        <Routes>
          <Route path="/" element={<LogInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
