/**
 * Created by keyang on 2019/5/8.
 */
import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button disabled={props.disabled} className={[classes.Button, classes[props.BtnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
);

export default button;