import React from "react";

import {Avatar} from "@mui/material";
import style from "../../styles/onenote.module.css"

interface IOneNote {
  imageUrl: string;
  name: string;
  createdAt: string;
  header: string;
  content: string;
}

const OneNote = ({imageUrl, createdAt, name, content, header}: IOneNote) => {
  return (
    <section className={style.body}>
      <section className={style.top}>
        <Avatar
          sx={{height: 46, width: 46}}
          src={imageUrl}
        />
        <section className={style.noteInfo}>
          <p className={style.name}>{name}</p>
          <p className={style.time}>{createdAt.split("T")[0].split("-").join("/")} • {createdAt.split("T")[1].split(".")[0]}</p>
        </section>
      </section>
      <section className={style.bottom}>
        <p className={style.header}>{header}</p>
        <p className={style.content}>{content}</p>
      </section>
    </section>
  )
}

export default OneNote