import React from "react";
import styles from "./filter.module.css";

const Filter = (props) => {
    const changeHandler = (event) => {
        props.changed(event.target.value);
    };

    const structureTerm = (term, year) => {
        return term[0].toUpperCase() + term.slice(1) + " " + year;
    }

    return (
        <div className="filter-body">
            <label>{props.name}</label>
            <select value={props.selected} onChange={changeHandler}>
                {props.options.map(
                    (val) => ( <option value={val.id}>{structureTerm(val.term, val.year)}</option> )
                )}
            </select>
        </div>
    );
};

export default Filter;