import React from "react";
import { Character } from "../../models";
import styles from "./characterCard.module.css";

export const CharacterCard = ({
  name,
  image,
  status,
  gender,
  species,
  origin,
}: Character) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="" />
      <div>
        <h3 className={styles.characterName}>{name}</h3>
        <span className={styles.characterInfo}>
          <strong>Status: </strong> {status}
        </span>
        <span className={styles.characterInfo}>
          <strong>Gender: </strong> {gender}
        </span>
        <span className={styles.characterInfo}>
          <strong>Species: </strong> {species}
        </span>
        <span className={styles.characterInfo}>
          <strong>Origin: </strong> {origin.name}
        </span>
      </div>
    </div>
  );
};
