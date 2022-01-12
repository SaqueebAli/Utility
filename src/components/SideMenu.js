import React from 'react'
import { makeStyles,withStyles } from '@material-ui/styles';
import SideMenuItems from './SideMenuItems';

const sidemenuStyles=makeStyles({

    sideMenu:{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0px",
        width:"240px",
        height:"100%",
        backgroundColor: "#253053"
      }
})


 function SideMenu(){
     const classes=sidemenuStyles();
     
    return(<div className={classes.sideMenu}>
        <img src={require("../img.jpg")} id="logo" alt="360Logica" />
        <SideMenuItems/>
    </div>);}


export default SideMenu;