import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Home from "./pages/Home";

import {HomeProvider} from "./HomeContext";

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
      <HomeProvider>
        <div className="App">
          <Router>
            <Routes>
              <Route path={"/"} element={<Register/>}/>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/home"} element={<Home/>}/>
            </Routes>
          </Router>
        </div>
      </HomeProvider>
    </ThemeProvider>
  );
}

export default App;
