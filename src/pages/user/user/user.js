import React, { useLayoutEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {
  setToken,
  setUser,
  selectToken,
  selectUser
} from '../../../redux/userReducer';

import styles from './login.module.css';
import axios from "axios";
import { QuestionAnswerSharp } from "@material-ui/icons";

// TODO:
// 1. when this page is first opened, call http://127.0.0.1:8000/users/{user.id} and get info
// 2. create UI that shows all of the user data

// steps to start this page:
// you need to first log in by using the login page in /user/login
// afterwards, move to /user/mypage
// the account is tester1@berkeley.edu and password is tester1
// if you have any Question ask junghun huh

function User(props) {

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorr, setError] = useState(false);

  const logIn = async () => {
    axios.post('http://127.0.0.1:8000/users/login/', {
      berkeley_email: email,
      password: password
    })
      .then(function (response) {
        console.log(response.data);
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.user));
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

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Stack spacing={4} direction="column" onSubmit={logIn}>
          <TextField id="emailField" error={errorr} helperText={"Wrong username or password."} value={email} onChange={onEmailChange} label="Email" variant="outlined" />
          <TextField id="passwordField" value={password} onChange={onPasswordChange} type="password" label="Password" variant="outlined" className={styles.passwordBox} />
          <Button onClick={logIn} variant="contained">{token}</Button>
          <Button variant="text"><Link to={`/user/signup`}>Sign Up</Link>
            <div>{token}</div>
          </Button>
        </Stack>
      </div>
    </div>

  );
}
export default User;
