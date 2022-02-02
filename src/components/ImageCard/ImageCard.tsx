import React from "react";
import IActiveCard from "../../interfaces/IActiveCard";

import styles from "./ImageCard.module.css";

interface IImageCard {
  url: string;
  isActive?: boolean;
  setActiveCard: React.Dispatch<React.SetStateAction<IActiveCard>>;
}

export default function ImageCard({
  url,
  isActive,
  setActiveCard,
}: IImageCard) {
  const handleSelectionClick = () => {
    if (!isActive) {
      setActiveCard({ isActive: true, url });
    }
  };

  const handleCloseClick = () => {
    setActiveCard({ isActive: false, url: "" });
  };

  return (
    <div
      className={isActive ? styles.activeCard : styles.card}
      onClick={handleSelectionClick}
    >
      <div className={styles.imageWrapper}>
        <img src={url} alt="" />
        <button onClick={handleCloseClick}>Close</button>
      </div>
    </div>
  );
}
