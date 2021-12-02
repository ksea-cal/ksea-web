import React, { useLayoutEffect, useState } from "react";
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

const StructureData = (raw) => {
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

const GetTerms = (raw) => {
    return ["Fall 2021", "Spring 2021"];
};

const Members = (props) => {
    const data = StructureData(props.members);
    const terms = GetTerms(props.members);

    const [filteredTerm, setFilteredTerm] = useState("All Terms");

    const termChangeHandler = (selectedTerm) => {
        setFilteredTerm(selectedTerm);
    };

    const [term, year] = filteredTerm.split(" ");

    const filteredData = data.filter(
        (member) => {
            if (term == "All" && year == "Terms") return true;
            return member.term == term && member.year == year;
        }
    );

    return (
        <div className="container">
            <div className="bar">
                <h2>Members</h2>
                <Filter
                    selected={filteredTerm}
                    onChangeTerm={termChangeHandler}
                    terms={terms}
                />
            </div>
            <Grid info={filteredData}/>
        </div>
    );
}
export default Members;