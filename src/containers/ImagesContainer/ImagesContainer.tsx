import React from "react";
import ImageCard from "../../components/ImageCard";
import IActiveCard from "../../interfaces/IActiveCard";
import ICard from "../../interfaces/ICard";

import styles from "./ImagesContainer.module.css";

interface IImageContainer {
  cards: ICard[] | null;
  setActiveCard: React.Dispatch<React.SetStateAction<IActiveCard>>;
}

export default function ImagesContainer({
  cards,
  setActiveCard,
}: IImageContainer) {
  return (
    <div className={styles.container}>
      {cards
        ? cards.map((card, index) => (
            <ImageCard
              key={card.id ? card.id : index}
              url={card.url}
              setActiveCard={setActiveCard}
            />
          ))
        : null}
    </div>
  );
}
