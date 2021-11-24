import { SubtitlesOutlined } from "@material-ui/icons";
import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
    // assumes that "props" contains name, status, major, bio, and photo (tbd)

    // slice bio if bio is too long (which is to be expected).
    // Don't slice if bio is hasty and short. 
    const wordLength = 240;
    const summary = ((props.bio.length > wordLength - 4) ? props.bio.slice(0, wordLength-4) + " ..." : props.bio);

    return (
        <div className={styles.cardbody}>
            <div className={styles.image}>
                <div className={styles.placeholder}></div>
            </div>
            <div className={styles.content}>
                <div>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className={styles.name}>{props.name}</a>
                    <p className={styles.info}>{props.status + " | " + props.major}</p>
                    <p className={styles.info}>{summary}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;