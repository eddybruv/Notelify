import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

import { HomeProvider } from "./context/HomeContext";
import { UserProvider } from "./context/UserContext";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import ConfirmPassword from "./pages/auth/ConfirmPassword";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0064fe",
    },
    secondary: {
      main: "#89909c",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <UserProvider>
          <HomeProvider>
            <div className="App">
              <Routes>
                <Route path={"/"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/home"} element={<Home />} />
                <Route
                  path={"/confirm-password"}
                  element={<ConfirmPassword />}
                />
              </Routes>
            </div>
          </HomeProvider>
        </UserProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
