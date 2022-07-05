import { FC } from "react";
import logo from "../assets/logo1.png";
import style from "../styles/navbar.module.css";

import Options from "./partials/Nav/Option";
import navArr from "./partials/Nav/navArr";

import {NotificationsOutlined} from "@mui/icons-material";
import avatar from "../assets/runstar.jpg";
import {Avatar} from "@mui/material";
import Home from "../pages/Home";

const Navbar: FC = () => {
  return (
    <section className={style.body}>
      <section className={style.content}>
        <section className={style.top}>
          <section className={style.workspaceInfo}>
            <section className={style.info}>
              <section className={style.photoBox}>
                <img src={logo} alt="" />
              </section>
              <section className={style.nameBox}>
                <p className={style.name}>Adidas</p>
                <p className={style.label}>Workspace</p>
              </section>
            </section>
          </section>
          <section className={style.navSection}>
            {navArr.map((nav, index: number) => {
              return <Options component={nav.component} icon={nav.icon} text={nav.text} key={index} />;
            })}
          </section>
        </section>
        <section className={style.bottom}>
          <Options component={<Home/>} icon={<NotificationsOutlined/>} text={"Notification"}/>
          <section className={style.personalInfo}>
            <Avatar src={avatar}/>
            <p>Profile</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Navbar;
