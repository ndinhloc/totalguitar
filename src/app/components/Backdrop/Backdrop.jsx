import React from "react";
import classes from "./style.module.css";
export default function Backdrop({ children, onClick }) {
  return (
    <div className={classes.backdrop} onClick={onClick}>
      {children}
    </div>
  );
}
