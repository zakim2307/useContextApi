import './App.css';
// import Profile from './components/Profile';
// import Login from './components/Login';
import React, { useState, createContext } from 'react';
// import { LoginContext } from './Contexts/LoginContext';
import FunctionContextComponent from './components/FunctionContextComponent';
import ClassContextComponent from './components/ClassContextComponent';
import ThemeProvider from './components/ThemeContext'

export const ThemeContext = createContext();

function App() {
  // const [showProfile, setShowProfile] = useState(false);
  // const [username, setUsername] = useState("");

  return (
    <div className="App">
      {/* <LoginContext.Provider value={{username, setUsername, showProfile, setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider> */}

      <ThemeProvider>
        <FunctionContextComponent />
        <FunctionContextComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
