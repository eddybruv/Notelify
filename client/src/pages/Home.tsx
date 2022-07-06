import React, { FC, useContext } from "react";
import HomeContext, { IHomeContext } from "../context/HomeContext";
import style from "../styles/home.module.css";
import Navbar from "../components/Navbar";
import ViewNotes from "../components/Notes/NotesBody";

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
