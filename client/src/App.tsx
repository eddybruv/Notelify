import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

import {HomeProvider} from "./context/HomeContext";

import {createTheme, ThemeProvider} from "@mui/material/styles";
import './App.css';
import ConfirmPassword from './pages/auth/ConfirmPassword';

const theme = createTheme({
  palette: {
    primary: {
      main: "#0064fe"
    },
    secondary: {
      main: "#89909c"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route path={"/"} element={<Register/>}/>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/home"} element={<Home/>}/>
              <Route path={"/confirm-password"} element={<ConfirmPassword/>} />
            </Routes>
          </Router>
        </div>
      </HomeProvider>
    </ThemeProvider>
  );
}

export default App;
