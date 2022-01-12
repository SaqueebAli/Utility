import React,{useContext} from 'react';
import { makeStyles,withStyles } from '@material-ui/styles';
import Items from './Items';


const sidemenuItems=makeStyles({

    sideMenuItems:{
        
        width:"99%",
        height:"100%",
        backgroundColor: "#253053",
        borderRight: "1px solid #253053", 
        color:"white",
        justifyContent:"center",
        alignItems:"center"
      }
})

function SideMenuItems(){
   
    const classes=sidemenuItems();
    return(
        <div className={classes.sideMenuItems}>
        
        <Items name="Home"/>
        <Items name="Analysis"/>
        </div>
    );}

export default SideMenuItems;

