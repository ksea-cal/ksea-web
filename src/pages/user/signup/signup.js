import React, { useLayoutEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import styles from './signup.module.css';
import axios from "axios";


function SignUp(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState(null);
  const [degree, setDegree] = useState("");
  const [major_1, setMajor_1] = useState(null);
  const [major_2, setMajor_2] = useState(null);
  const [minor_1, setMinor_1] = useState(null);
  const [minor_2, setminor_2] = useState(null);
  const [errorr, setError] = useState(false);

  // fetch list of majors: http://127.0.0.1:8000/majors/
  //TODO:
  //  1. make the design more suitable
  // 2. after signup, save data in redux (look at login for documentation and help)
  // 3. fetch majors from the api
  // add logic / toolbar to select majors and minors
  // majors - Intended/Major 1 & Intended/Major 2
  // send to signup as "majors": [list of ids]
  // minors - Minor 1 & minor 2
  // send to signup as "minors": [list of ids]
  // gender -> male => "MAL", female => "FEM"

  const signUp = async () => {
    console.log(email, password)
    axios.post('http://127.0.0.1:8000/users/signup/', {
      berkeley_email: email,
      password: password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value)
    setError(false);
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onPasswordCheckChange = (event) => {
    setPasswordCheck(event.target.value)
  }

  const onfirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const onLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const onFullNameChange = (event) => {
    setFullName(event.target.value)
  }

  const onCountryChange = (event) => {
    setCountry(event.target.value)
  }

  const onGenderChange = (event) => {
    setGender(event.target.value)
  }

  const onBirthChange = (event) => {
    setBirth(event.format("MM/DD/yyyy"));
  }

  return (
    <div className={styles.container}>
      <TextField
        id="emailField"
        error={errorr}
        helperText={"Wrong username or password."}
        value={email}
        onChange={onEmailChange}
        label="Email"
        variant="outlined"
      />
      <div className={styles.subsequentBox}>
        <TextField
          id="passwordField"
          value={password}
          onChange={onPasswordChange}
          type="password"
          label="Password"
          variant="outlined"
          className={styles.subsequentBox}
        />
      </div>

      <div className={styles.subsequentBox}>
        <TextField
          id="passwordCheckField"
          value={passwordCheck}
          onChange={onPasswordCheckChange}
          label="Confirm Password"
          variant="outlined"
          className={styles.subsequentBox}
        />
      </div>

      <div className={styles.subsequentBox}>
        <TextField
          id="firstNameField"
          value={firstName}
          onChange={onfirstNameChange}
          label="First Name"
          variant="outlined"
          className={styles.subsequentBox}
        />
      </div>

      <div className={styles.subsequentBox}>
        <TextField
          id="lastNameField"
          value={lastName}
          onChange={onLastNameChange}
          label="Last Name"
          variant="outlined"
          className={styles.subsequentBox}
        />
      </div>

      <div className={styles.subsequentBox}>
        <TextField
          id="fullNameField"
          value={fullName}
          onChange={onFullNameChange}
          label="Full Name (한국어)"
          variant="outlined"
          className={styles.subsequentBox}
        />
      </div>

      <div className={styles.subsequentBox}>
        <TextField
          id="countryField"
          value={country}
          onChange={onCountryChange}
          label="Country"
          variant="outlined"
          className={styles.subsequentBox}
        />
      </div>

      <div className={styles.subsequentBox}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Select
            id="genderField"
            value={gender}
            onChange={onGenderChange}
            label="Gender"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={styles.subsequentBox}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DesktopDatePicker
            id="birthField"
            value={birth}
            inputFormat="MM/DD/yyyy"
            onChange={onBirthChange}
            label="Birth"
            renderInput={(params) => <TextField {...params} />}
            className={styles.subsequentBox}
          />
        </LocalizationProvider>
      </div>

      <div className={styles.subsequentBox}>
        <TextField id="countryField" value={country} onChange={onCountryChange} label="Country" variant="outlined" className={styles.subsequentBox} />
      </div>

      <Button onClick={signUp} variant="contained">Sign Up</Button>
    </div>

  );
}
export default SignUp;