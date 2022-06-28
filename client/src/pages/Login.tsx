import React, { FC } from "react";
import { InputAdornment, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import style from "../styles/login.module.css";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import GoogleIcon from "@mui/icons-material/Google";

const Login: FC = () => {
  return (
    <section className={style.body}>
      <section className={style.content}>
        <section></section>
        <section className={style.main}>
          <p className={style.header}>Log in to continue</p>
          <form className={style.form}>
            <TextField
              sx={{ marginBottom: "1rem", width: "100%" }}
              label={"Email"}
              id={"email"}
              name={"email"}
              inputProps={{
                style: {
                  padding: 10,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={"start"}>
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              sx={{ marginBottom: "1rem", width: "100%" }}
              label={"Password"}
              id={"password"}
              name={"password"}
              type={"password"}
              inputProps={{
                style: {
                  padding: 10,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={"start"}>
                    <HttpsIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <Button
              color={"primary"}
              variant={"contained"}
              sx={{ marginBottom: "1rem", width: "100%" }}
            >
              Log in
            </Button>
            <section className={style.or}>OR</section>
            <Button
              startIcon={<GoogleIcon fontSize={"large"} color={"primary"} />}
              sx={{
                marginBottom: "1rem",
                width: "100%",
                color: "black",
                boxShadow: "1px 1px 7px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              Continue with Google
            </Button>
          </form>
          <section className={style.signUp}>
            <Link to={"/register"}>Sign up for an account</Link>
          </section>
        </section>
        <footer className={style.footer}>Footer</footer>
      </section>
    </section>
  );
};

export default Login;
