import React, { ChangeEvent, FC, useState } from "react";
import { InputAdornment, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import style from "../../styles/login.module.css";
import MailIcon from "@mui/icons-material/Mail";
import HttpsIcon from "@mui/icons-material/Https";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";

const Register: FC = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const checkEmail = (email: string): boolean => {
    if (email === "") return false;
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    return email.match(regex) ? false : true;
  };

  const emailHelperText = (email: string) => {
    if (checkEmail(email)) return "Email not valid";
    return "";
  };

  const checkPassword = (password: string) => {
    if (password === "") return false;
    // Minimum eight characters and one number:
    let numRegex = /\d/g;
    if (password.length < 8 || !numRegex.test(password)) {
      return true;
    }
    return false;
  };

  const passwordHelperText = (password: string) => {
    const numRegex = /\d/g;

    if (checkPassword(password)) {
      if (password.length < 8 || !numRegex.test(password)) {
        return "Password must be more than 8 characters and contain a number";
      }
    }
    return "";
  };

  const checkFields = (user: any) => {
    if (!user?.name || !user.email || !user.password || !user.email)
      return false;
    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (checkFields(user)) {
      const result = await axios
        .post("api/user/create-user", user)
        .then((data) => console.log(data));
    }
  };

  return (
    <section className={style.body}>
      <section className={style.content}>
        <section></section>
        <section className={style.main}>
          <p className={style.header}>Sign up for your account</p>
          <form className={style.form}>
            <TextField
              sx={{ marginBottom: "1rem", width: "100%" }}
              label={"Full Name"}
              id={"name"}
              name={"name"}
              value={user.name}
              onChange={handleChange}
              inputProps={{
                style: {
                  padding: 10,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={"start"}>
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              sx={{ marginBottom: "1rem", width: "100%" }}
              label={"Username"}
              id={"username"}
              name={"username"}
              value={user.username}
              onChange={handleChange}
              inputProps={{
                style: {
                  padding: 10,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position={"start"}>
                    <InsertEmoticonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ marginBottom: "1rem", width: "100%" }}
              label={"Email"}
              id={"email"}
              name={"email"}
              error={checkEmail(user.email)}
              helperText={emailHelperText(user.email)}
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
              value={user.email}
              onChange={handleChange}
            />
            <TextField
              sx={{ marginBottom: "1rem", width: "100%" }}
              label={"Password"}
              id={"password"}
              name={"password"}
              type={"password"}
              error={checkPassword(user.password)}
              value={user.password}
              helperText={passwordHelperText(user.password)}
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
              Register
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
            <Link to={"/login"}>Already have an account? Log in</Link>
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
    </section>
  );
};
export default Register;
