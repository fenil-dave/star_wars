import React from "react";
import styles from "./characterCard.module.css";

const CharacterCard = ({ imgUrl, name, id }) => {
    const handleCardClick = (id) => {
        console.log({ id });
    };
    return (
        <div onClick={handleCardClick} className={styles.card}>
            <img className={styles.characterImg} src={imgUrl} alt="character" />
            <p>{name}</p>
        </div>
    );
};

export default CharacterCard;
