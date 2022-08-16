import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectPage,
    selectTotal,
    setPage,
} from "../../features/characters/charactersSlice";
import styles from "./pagination.module.css";

const Pagination = () => {
    const total = useSelector(selectTotal);
    const [pageCount, setPageCount] = useState(0);
    const page = useSelector(selectPage);
    const dispatch = useDispatch();

    useEffect(() => {
        setPageCount(Math.ceil(total / 10));
    }, [total]);

    const handlePageChange = (page) => {
        dispatch(setPage(page));
    };

    return (
        <div className={styles.container}>
            <button
                className={styles.paginationIndex}
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
            >
                Prev
            </button>
            {Array(pageCount)
                .fill()
                .map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={clsx(styles.paginationIndex, {
                            [styles.activeIndex]: page === index + 1,
                        })}
                    >
                        {index + 1}
                    </button>
                ))}
            <button
                className={styles.paginationIndex}
                onClick={() => handlePageChange(page + 1)}
                disabled={page === pageCount}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
