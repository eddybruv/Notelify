import React, {useState} from "react";
import style from "../../styles/createnote.module.css"

// mui stuff
import {Button, TextField} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

//components and related stuff

interface Props {
  handleModalClose: () => void;
}

const CreateNote = ({handleModalClose}: Props) => {

  const handleClose = () => {
    handleModalClose();
  }

  return (
    <section className={style.mainContainer}>
      <div className={style.content}>
        <header className={style.header}>
          <div className={style.container}>
            <h2>New note</h2>
            <Button
              onClick={handleClose}
              startIcon={<CloseIcon/>}
              variant="contained"
              color="secondary"
            > Close</Button>
          </div>
        </header>

        <section className={style.body}>
          <TextField
            size="small"
            sx={{width: "100%", marginBottom: "1.5rem"}}
            placeholder="Enter title here"
          />

          <textarea className={style.textarea} placeholder="Your description goes here"/>
        </section>
      </div>
    </section>
  )
}

export default CreateNote