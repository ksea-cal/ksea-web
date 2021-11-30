import React from "react";
import styles from "./filter.module.css";

const Filter = (props) => {
    const termChangeHandler = (event) => {
        props.onChangeTerm(event.target.value);
    };

    return (
        <div className="filter_body">
            <div className="term">
                <label>Term</label>
                <select value={props.selected} onChange={termChangeHandler}>
                    <option value='All Terms'>All Terms</option>
                    {props.terms.map((term) => (
                        <option value={term}>{term}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;