import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import NotesItem from "../NotesItem/NotesItem";

const NotesList = ({ deal, setDeal }) => {
  let items;
  if (deal[deal.length - 1].length > 1) {
    items = deal[deal.length - 1].filter((elem) => {
      if (typeof elem !== "string") {
        return elem;
      }
    });
    if (items !== "undefined" && items.length > 0) {
      let list = items.map((elem) => {
        let key = nanoid();
        return (
          <NotesItem key={key} deal={deal} setDeal={setDeal} item={elem} />
        );
      });

      return <ul>{list}</ul>;
    }
  }
};

export default NotesList;
