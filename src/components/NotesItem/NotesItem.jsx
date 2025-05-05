import React, { useState } from "react";
import styles from "./NotesItem.module.css";

const NotesItem = ({ deal, setDeal, item }) => {
  let [text, startTime, finishTime, toggleComplete] = [...item];

  function complete(e) {
    let text = e.target.parentElement.children[2].textContent;
    let copy = [...deal];

    for (let arr of copy[copy.length - 1]) {
      if (typeof arr !== "string") {
        for (let elem of arr) {
          if (elem === text) {
            arr[3] = !arr[3];
          }
        }
      }
    }
    setDeal(copy);
  }

  function delItem(e) {
    let text = e.target.parentElement.children[2].textContent;
    let copy = [...deal];
    copy.pop();
    let arr = [];
    for (let elem of deal[deal.length - 1]) {
      if (elem[0] !== text) {
        arr.push(elem);
      }
    }
    copy.push(arr);
    setDeal(copy);
  }

  const [editItem, setEditItem] = useState(false);
  const [newText, setNewText] = useState("");
  const [oldText, setOldText] = useState("");

  function editText(e) {
    setEditItem(!editItem);
    setOldText(e.target.textContent);
  }
  function handleChange(e) {
    setNewText(e.target.value);
  }
  function addNewText() {
    let copy = [...deal];
    for (let arr of copy[copy.length - 1]) {
      if (typeof arr !== "string") {
        for (let elem of arr) {
          if (elem === oldText) {
            arr[0] = newText;
          }
        }
      }
    }
    setEditItem(!editItem);
    setDeal(copy);
  }
  function downEnter(e) {
    if (e.key === "Enter") {
      addNewText();
    }
  }
  return (
    <li className={styles.wrapper}>
      <button
        className={toggleComplete ? styles.completeBtnDone : styles.completeBtn}
        onClick={complete}
      >
        ✓
      </button>
      <div className={styles.timeBlock}>
        <p>
          начало:{" "}
          <span className={styles.time}>
            {startTime === "" ? "---" : startTime}
          </span>
        </p>
        <p>
          конец: <span>{finishTime === "" ? "---" : finishTime}</span>
        </p>
      </div>
      <div className={styles.text} onDoubleClick={editText}>
        {editItem ? (
          <textarea
            className={!editItem ? styles.hide : styles.edit}
            autoFocus={true}
            onChange={handleChange}
            onBlur={addNewText}
            onKeyUp={downEnter}
          />
        ) : (
          <p className={toggleComplete ? styles.complete : ""}>{text}</p>
        )}
      </div>
      <button className={styles.delete} onClick={delItem}></button>
    </li>
  );
};

export default NotesItem;
