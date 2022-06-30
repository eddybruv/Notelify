import React, {FC} from "react";
import style from "../styles/dashboard.module.css"
import Navbar from "../components/Navbar";
import ViewNotes from "../components/Notes/ViewNotes";

const Dashboard:FC = () => {
  return (
    <section className={style.body}>
      <Navbar/>
      <ViewNotes/>
    </section>
  );
}

export default Dashboard