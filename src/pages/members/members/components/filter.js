import React from "react";
import styles from "./filter.module.css";

const Filter = (props) => {
    const changeHandler = (event) => {
        props.changed(event.target.value);
    };

    return (
        <div className="filter-body">
            <label>{props.name}</label>
            <select value={props.selected} onChange={changeHandler}>
                {props.options.map(
                    (val) => ( <option value={val}>{val}</option> )
                )}
            </select>
        </div>
    );
};

export default Filter;