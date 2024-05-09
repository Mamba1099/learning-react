import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userRef } from './RegisterSubmit';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const HandleRegisterSubmit = async (e) => {
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [matchName, setMatchName] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [matchPwd, setMatchPwd] = useState('');

    const errRef = useRef(null);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false); // Added missing state variable

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user === validName));
        setMatchName(user === matchName);
    }, [user, matchName, validName]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd === validPwd));
        setMatchPwd(pwd === matchPwd);
    }, [pwd, matchPwd, validPwd]);

    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
        setErrMsg(errMsg ==='Invalid Entry');
        return;
    }

  try {
    const response = await axios.post(REGISTER_URL, JSON.stringify({ user, pwd }), {
      headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    });
      console.log(JSON.stringify(response?.data));
    success(true);
    setUser('');
    setPwd('');
    setMatchPwd('');
  } catch (err) {
    if (!err?.response) {
      setErrMsg('No Server Response');
    } else if (err.response?.status === 409) {
      setErrMsg(errMsg ==='Username Taken');
    } else {
      setErrMsg(errMsg ==='Registration Failed');
    }
      errRef.current.focus();
      setSuccess(false);
  }
};

export default HandleRegisterSubmit;
