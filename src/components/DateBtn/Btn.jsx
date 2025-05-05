import styles from "./Btn.module.css";
import React from "react";

const Btn = ({ arrow, date, setDate }) => {
  function currentMonth(num) {
    let today = new Date();
    if (
      today.getFullYear() === date.getFullYear() &&
      today.getMonth() === date.getMonth() + num &&
      today.getDate() !== date.getDate()
    ) {
      setDate(today);
    } else {
      setDate(new Date(date.getFullYear(), date.getMonth() + num));
    }
  }
  let nextMonth = () => {
    arrow === "<< " && currentMonth(-1);
    arrow === " >>" && currentMonth(+1);
  };

  return (
    <div className={styles.btn}>
      <button onClick={nextMonth}>{arrow}</button>
    </div>
  );
};

export default Btn;
