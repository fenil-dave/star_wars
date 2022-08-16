import React from "react";
import styles from "./detail.module.css";
import { useParams } from "react-router-dom";

export function CharaceterDetail() {
    const { id } = useParams();

    return <div className={styles.container}>{`Character Id is: ${id}`}</div>;
}
