import React, {FC, useState, MouseEvent} from "react";
import {Button, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import style from "../../styles/notesbody.module.css";
import notesArr from "./notesArr";
import OneNote from "./OneNote";

const ViewNotes: FC = () => {

  const [publicState, setPublic] = useState(true);
  const [privateState, setPrivate] = useState(false);

  const handlePublic = (e: MouseEvent<HTMLLIElement>) => {
    setPrivate(() => false);
    setPublic(() => true);
  }

  const handlePrivate = (e: MouseEvent<HTMLLIElement>) => {
    setPrivate(() => true);
    setPublic(() => false);
  }

  return (
    <section className={style.body}>
      <header className={style.header}>
        <section className={style.label}>
          <h2>Notes</h2>
          <Button
            size={"large"}
            sx={{textTransform: "none"}}
            variant={"contained"}
            startIcon={<AddIcon fontSize="large"/>}>
            Create a public note
          </Button>
        </section>
        <section className={style.option}>
          <ul>
            <li onClick={handlePrivate} className={privateState ? style.active : ""}>Private</li>
            <li onClick={handlePublic} className={publicState ? style.active : ""}>Public</li>
          </ul>
        </section>
      </header>

      <section className={style.searchBox}>
        <section className={style.search}>
          <SearchOutlinedIcon style={{color: "#89909c"}}/>
          <input type="text" placeholder="Search notes"/>
        </section>
        <section className={style.sort}>
          <SortByAlphaIcon style={{color: "#89909c"}}/>
          <p>Sort:</p>
          <select name="option" id="option">
            <option value="chronological">Chronological</option>
            <option value="reverse">Reverse</option>
          </select>
        </section>
      </section>

      <section className={style.main}>
        <section className={style.pinnedNotes}>
          <p className={style.bigLabel}>Pinned public notes</p>

        </section>
        <section className={style.otherNotes}>
          <p className={style.bigLabel}>all public notes</p>
          <section className={style.notesContainer}>
            {notesArr?.map((note) => <OneNote imageUrl={note.imageUrl} name={note.name} createdAt={note.createdAt}
                                              header={note.header} content={note.content}/>)}
          </section>
        </section>
      </section>
    </section>
  )
}

export default ViewNotes