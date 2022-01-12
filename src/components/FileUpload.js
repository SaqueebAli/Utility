import React,{useRef,useState,useContext} from "react";
import { Grid ,makeStyles,withStyles } from '@material-ui/core';
import BTN from './btn';
// import SelectItems from '../components/SelectItems';
import VirtualList from "./VirtualList";
import {FieldContext} from "../context/FieldContext"; 
import DND from "./DND";






const useStyles=makeStyles({
    root:{
       
        width:"100%",
        paddingTop:"100px",
        justifyContent:"center",
        paddingLeft:"150px"
        
    }
    
});


function FileUpload(props){
    const [FieldName1,setFieldName1,FieldName2,setFieldName2]=useContext(FieldContext);
    
    const classes=useStyles();
    return(

       <Grid container className={classes.root} direction='row'  spacing={2}>
          
           
          
           <Grid item xs={3}>
           <BTN name="Upload file1" fs="File1"/>
           <BTN name="Upload file2" fs="File2"/>
           </Grid>
           <Grid item xs={2}></Grid>
           <Grid item xs={2}>
           <VirtualList name="File1" Fields={FieldName1}/> 
           
           </Grid>
           
           <Grid item xs={2} container direction='row'>

          
           <VirtualList name="File2" Fields={FieldName2}/>
            
           
           </Grid>
           
           
           
           
           
           
       </Grid>
          
    );}

export default FileUpload;