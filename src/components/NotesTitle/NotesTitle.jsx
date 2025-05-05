import React from "react";
import styles from "./NotesTitle.module.css";

const NotesTitle = ({ deal }) => {
  let now = deal[deal.length - 1][0];

  let copy = deal.filter((elem) => {
    if (elem[0] === now[0]) {
      return elem;
    }
  });
  let resFound =
    copy.length > 1 || now.length > 1 ? "" : "на сегодня дел не найдено";

  return (
    <div id="notes">
      <h3 >список дел на : {now}</h3>
      <div className={styles.result}>
        <p>{resFound}</p>
      </div>
    </div>
  );
};

export default NotesTitle;
