import React from 'react'
import img from '../images/7850968.gif'
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import LandHead from './landing_header';
const useStyles = makeStyles((theme)=>({
   root:{
       minHeight : '100vh',
       backgroundImage : `url(${img})`,
       backgroundRepeat : 'no-repeat',
       backgroundSize : 'cover',
       //overflow : 'scroll'
   } 
}));
export default function LandPage(){
    const classes = useStyles();
    return <div className={classes.root}>
        <CssBaseline/>
        <LandHead/>
    </div>;
}