import React, { FC, useContext } from "react";
import HomeContext, { IHomeContext } from "../HomeContext";
import style from "../styles/dashboard.module.css";
import Navbar from "../components/Navbar";
import ViewNotes from "../components/Notes/Body";

const Home: FC = () => {
  const { content } = useContext(HomeContext) as IHomeContext;

  return (
    <section className={style.body}>
      <Navbar />
      <section className={style.otherDiv}>{content}</section>
    </section>
  );
};

export default Home;
