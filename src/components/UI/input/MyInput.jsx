import React from 'react';
import classes from './MyInput.module.css';
const MyInput = (porps) => {
  return <input className={classes.myInput} {...porps} />;
};

export default MyInput;
