import React, { useState } from "react";
import styles from "./NotesTextField.module.css";

const NotesTextField = ({ deal, setDeal }) => {
  const [newText, setNewText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");

  function handleChangeStart(e) {
    setStartTime(e.target.value);
  }
  function checkTimeStart(e) {
    if (deal[deal.length - 1].length > 1) {
      for (let elem of deal[deal.length - 1]) {
        if (e.target.value > elem[1] && e.target.value < elem[2]) {
          setNewText("выберите другое время для начала дела");
          setStartTime("");
        }
      }
    }
  }

  function handleChangeFinish(e) {
    setFinishTime(e.target.value);
  }
  function checkTimeFinish(e) {
    if (deal[deal.length - 1].length > 1) {
      for (let elem of deal[deal.length - 1]) {
        if (typeof elem === "object") {
          console.log(elem);
          if (
            (e.target.value > elem[1] && e.target.value < elem[2]) ||
            e.target.value < startTime ||
            (e.target.value > elem[2] && startTime < elem[1])
          ) {
            setNewText("выберите другое время для завершения дела");
            setFinishTime("");
          } else {
            setNewText("");
          }
        }
      }
    }
  }
  function clearStartTime(e) {
    setStartTime("");
  }
  function clearFinishTime(e) {
    setFinishTime("");
  }

  function handleChange(e) {
    setNewText(e.target.value);
  }

  function addDeal() {
    if (newText.length > 0) {
      let task = [newText, startTime, finishTime];

      let chosenDate = deal[deal.length - 1][0];
      let copy = [];
      let arr = [];
      for (let elem of deal) {
        if (elem[0] !== chosenDate) {
          arr.push(elem);
        }
      }
      let lastDeal = [chosenDate];
      for (let elem of deal) {
        if (elem[0] === chosenDate) {
          for (let el of elem) {
            if (typeof el !== "string") {
              lastDeal.push(el);
            }
          }
        }
      }
      task.push(false);
      lastDeal.push(task);
      copy.push(...arr);
      copy.push(lastDeal);
      setDeal([...copy]);
      setNewText("");
      setStartTime("");
      setFinishTime("");
    }
  }

  return (
    <div className={""}>
      <div className={styles.container}>
        <div className={styles.blockTime}>
          <div className={styles.startTime}>
            <input
              type="time"
              placeholder="начало"
              onChange={handleChangeStart}
              value={startTime}
              onBlur={checkTimeStart}
            />
            <button onClick={clearStartTime}>x</button>
          </div>
          <div className={styles.finishTime}>
            <input
              type="time"
              placeholder="завершение"
              onChange={handleChangeFinish}
              value={finishTime}
              onBlur={checkTimeFinish}
            />
            <button onClick={clearFinishTime}>x</button>
          </div>
        </div>
        <div className={styles.text}>
          <textarea onChange={handleChange} value={newText}></textarea>
        </div>
      </div>
      <button className={styles.save} onClick={addDeal}>
        сохранить
      </button>
    </div>
  );
};

export default NotesTextField;
