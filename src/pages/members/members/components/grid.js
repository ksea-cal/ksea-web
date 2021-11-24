import React from "react";
import Card from "./card";
import styles from "./grid.module.css";

const Grid = (props) => {
    // assumes props is a list that contains info for person 1 and person 2

    return (
        <div className={styles.container}>
            {props.info.map((person) => (
                <Card
                    name = {person.name}
                    status = {person.status}
                    major = {person.major}
                    bio = {person.bio}
                />
                ))
            }
        </div>
    );
};

export default Grid;