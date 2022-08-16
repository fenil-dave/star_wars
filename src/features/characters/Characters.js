import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters, selectData, selectPage } from "./charactersSlice";
import styles from "./Characters.module.css";
import CharacterCard from "../../components/characterCard";

export function Characters() {
    const data = useSelector(selectData);
    const page = useSelector(selectPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters(page));
    }, [page, dispatch]);

    const getImageURL = (url) => {
        const urlSplit = url.split("/");
        return {
            id: urlSplit[urlSplit.length - 2],
            url: `https://starwars-visualguide.com/assets/img/characters/${
                urlSplit[urlSplit.length - 2]
            }.jpg`,
        };
    };

    return (
        <div className={styles.container}>
            {data.map((character) => {
                const { id, url } = getImageURL(character.url);
                return (
                    <CharacterCard imgUrl={url} name={character.name} id={id} />
                );
            })}
        </div>
    );
}
