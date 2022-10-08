import React, { ChangeEvent, FC, useState } from "react";
import { InputAdornment, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import style from "../../styles/login.module.css";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Toast from "../../components/Misc/Toast";
import axios from "axios";

const Login: FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [userNotFoundToast, setUserNotFoundToast] = useState(false);
  const [inputFieldsToast, setInputFieldsToast] = useState(false);
  const [incorrectPasswordToast, setIncorrectPasswordToast] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const checkFields = (user: any) => {
    if (!user.email || !user.password) return false;
    return true;
  };

  const handleSubmit = async () => {
    if (checkFields(user)) {
      const results = await axios
        .post("api/user/login", user)
        .then((data) => console.log(data))
        .catch((data) => console.log("error:", data));
    }
  };

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
              value={user.email}
              onChange={handleChange}
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
              value={user.password}
              onChange={handleChange}
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
              onClick={handleSubmit}
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
            <Link to={"/"}>Sign up for an account</Link>
          </section>
        </section>
        <footer className={style.footer}>
          <p>By Eddybruv</p>
          <div className={style.bottomIcons}>
            <a
              href="https://github.com/eddybruv/Notelify"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/eddybruv_"
              target={"_blank"}
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/edwin-ajong/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </footer>
      </section>
      {userNotFoundToast && <Toast severity="error" message="User not found" />}
    </section>
  );
};

export default Login;
