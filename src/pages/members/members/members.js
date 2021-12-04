import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import {
    setToken,
    setUser,
    selectToken,
    selectUser
} from '../../../redux/userReducer';

import styles from './members.module.css';
import axios from "axios";

import Grid from "./components/grid";
import Filter from "./components/filter";

// Parser for the raw data that is called from the API. 
// Organizes data into a format that is more easily filtered and managed. 
const structureData = (raw) => {
    return [
                {
                    name: "Berry Not sPeciAl ",
                    status: "Member",
                    major: "EECS",
                    term: "Fall",
                    year: "2021",
                    bio: "Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen. Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen. Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen."
                },
                {
                    name: "Dumpling Addict",
                    status: "Member",
                    major: "EECS",
                    term: "Spring",
                    year: "2021",
                    bio: "Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen. Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen. Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen."
                },
                {
                    name: "Apple Boy",
                    status: "Member",
                    major: "EECS",
                    term: "Fall",
                    year: "2021",
                    bio: "Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen. Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen. Hello! I am a person this should exceed a hundred characters cuz I am curious to see what would happen."
                }
            ];
};

const Members = (props) => {

    const getTerms = () => {
        axios.get('http://127.0.0.1:8000/semesters/') // change link when database is uploaded.
        .then(
            (response) => {
                setTerms(response.data.results);
                setFilteredTerm(terms[0].id); // change to portray most recent term.
            }
        )
        .catch((error) => { console.log(error); });
    };
    const structureTerm = (val) => { return val.term[0].toUpperCase() + val.term.slice(1) + " " + val.year; }
    const [terms, setTerms] = useState([]);

    const [filteredTerm, setFilteredTerm] = useState(1);
    const termChangeHandler = (selectedTerm) => { setFilteredTerm(selectedTerm); };


    useEffect( () => { getTerms(); }, [] );
    
    const data = structureData(props.members);

    return (
        <div className="container">
            <div className="bar">
                <h2>Members</h2>
                <Filter
                    name="Term"
                    selected={filteredTerm}
                    changed={termChangeHandler}
                    options={terms}
                    labelFunc={structureTerm}
                />
            </div>
            <Grid info={data}/>
        </div>
    );
}
export default Members;