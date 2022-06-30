import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import {createTheme, ThemeProvider} from "@mui/material/styles";
import './App.css';

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
      <div className="App">
        <Router>
          <Routes>
            <Route path={"/"} element={<Register/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/dashboard"} element={<Dashboard/>}/>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
