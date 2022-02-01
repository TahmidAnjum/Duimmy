import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar,IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
//import img from '../images/7850954.jpg'
const useStyles = makeStyles((theme)=>({
    appbar:{
        flexGrow : '1'
    },
    
    icon :{
       color : '#fff',
       
   }
}));

export default function LandHead(){
    const classes = useStyles();
    return( 
        <div>
            <AppBar  style={{background : 'none', color : '#fff'}} elevation={0}>
                <Toolbar style={{width : "80%", margin : '0 auto'}}>
                    <h1 className={classes.appbar} style={{fontSize:'5rem', align : 'center'}}>Welcome to</h1>                
                    <IconButton >
                        <SortIcon className={classes.icon} style={{fontSize : '5rem'}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}