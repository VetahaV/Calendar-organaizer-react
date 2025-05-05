import styles from "./DateBlock.module.css";
import React from "react";

const DateBlock = ({ date }) => {
  let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  return (
    <div className={styles.font}>
      <h3>
        {month}&nbsp;{year}
      </h3>
    </div>
  );
};

export default DateBlock;
