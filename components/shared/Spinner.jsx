import React from "react";
import styles from "@/styles/spinner.module.scss";
const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Spinner;
