import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./characterCard.module.css";

const CharacterCard = ({ imgUrl, name, id }) => {
    const navigation = useNavigate();
    const handleCardClick = (id) => {
        navigation(`/${id}`);
    };
    return (
        <div onClick={() => handleCardClick(id)} className={styles.card}>
            <img className={styles.characterImg} src={imgUrl} alt="character" />
            <div className={styles.nameContainer}>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default CharacterCard;
