import React, { useState } from "react";
import styles from "./NotesMain.module.css";
import NotesTitle from "../NotesTitle/NotesTitle";
import NotesTextField from "../NotesTextField/NotesTextField";
import NotesList from "../NotesList/NotesList.jsx";

const Notes = ({ deal, setDeal }) => {
  const [list, setList] = useState([]);

  let objDeal = deal[deal.length - 1];
  if (objDeal) {
    return (
      <div className={styles.wrapper}>
        <NotesTitle deal={deal} />
        <div className={styles.proposition}>
          <p>добавьте дело:</p>
        </div>
        <NotesTextField
          deal={deal}
          setDeal={setDeal}
          list={list}
          setList={setList}
        />
        <NotesList deal={deal} setDeal={setDeal} />
      </div>
    );
  }
};

export default Notes;
