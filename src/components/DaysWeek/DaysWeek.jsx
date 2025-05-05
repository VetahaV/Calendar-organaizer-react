import styles from "./DaysWeek.module.css";
import React from "react";
import { nanoid } from "nanoid";

const Weekdays = () => {
  let daysName = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  let list = daysName.map((name, index) => {
    let id = nanoid();
    return (
      <li key={id} className={index < 5 ? "green" : "red"}>
        {name}
      </li>
    );
  });
  return <ul className={styles.container}>{list}</ul>;
};

export default Weekdays;
