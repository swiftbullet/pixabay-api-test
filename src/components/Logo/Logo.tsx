import React from "react";
import LogoIcon from "../../icons/LogoIcon";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <LogoIcon />
    </div>
  );
}
