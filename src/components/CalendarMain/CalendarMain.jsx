import styles from "./CalendarMain.module.css";
import React from "react";
import { nanoid } from "nanoid";
import DaysWeek from "../DaysWeek/DaysWeek";

const Calendar = ({ date, deal, setDeal }) => {
  let daysInMonth =
    33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
  let firstDay = new Date(date.getFullYear(), date.getMonth()).getDay();
  let cells = [];
  let numDay = 1;
  for (let i = 0; i < 35; i++) {
    if (i === firstDay - 1 || (1 < numDay && numDay <= daysInMonth)) {
      cells.push(numDay);
      numDay++;
    } else {
      cells.push("");
    }
  }

  function reviewCase(e) {
    if (e.target.textContent !== "") {
      window.location.href = "#notes";
      let chosenDate =
        e.target.textContent +
        "." +
        (+date.getMonth() + 1) +
        "." +
        date.getFullYear();
      let copy = [];
      for (let elem of deal) {
        if (elem[0] === chosenDate) {
          copy.push(elem);
        }
      }
      if (copy.length > 0) {
        let newArr = deal.map(elem => {
          if (elem[0] !== chosenDate) {
            return elem;
          }
        });
        setDeal([...newArr, ...copy]);
      } else {
        setDeal([...deal, [chosenDate]]);
      }
    }
  }

  let list = cells.map((cell) => {
    let check = false;
    let id = nanoid();
    if (deal.length > 0 && cell > 0) {
      for (let obj of deal) {
        if (
          obj.length > 1 &&
          +obj[0].split(".")[0] === cell &&
          +obj[0].split(".")[1] === date.getMonth() + 1
        ) {
          check = "true";
        }
      }
    }
    return (
      <li
        onClick={reviewCase}
        key={id}
        className={
          cell === new Date().getDate() &&
          new Date().getMonth() === date.getMonth()
            ? styles.toDay
            : styles.allDays
        }
      >
        {cell}
        <div className={check ? styles.task : ""}></div>
      </li>
    );
  });
  return (
    <div className={styles.wrapper}>
      <DaysWeek />
      <ul className={styles.container}>{list}</ul>
      <div className="margin-top"></div>
      <div id="notes"></div>
    </div>
  );
};

export default Calendar;
