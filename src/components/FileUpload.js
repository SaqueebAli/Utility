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
    const [FieldName1,setFieldName1,FieldName2,setFieldName2,checkedData,setCheckedData,fileName,setFileName]=useContext(FieldContext);
   
    const classes=useStyles();
    return(

       <Grid container className={classes.root} direction='row'  spacing={2}>
          
           
          
           <Grid item xs={3}>
           <BTN  fs="File1"  design={fileName["FileName1"]}/>
           <BTN  fs="File2"  design={fileName["FileName2"]}/>
           </Grid>
           <Grid item xs={2}></Grid>
           <Grid item xs={2}>
           <VirtualList name="File1" Fields={FieldName1} filename={fileName["FileName1"]}/> 
           
           </Grid>
           
           <Grid item xs={2} container direction='row'>

          
           <VirtualList name="File2" Fields={FieldName2} filename={fileName["FileName2"]}/>
            
           
           </Grid>
           
           
           
           
           
           
       </Grid>
          
    );}

export default FileUpload;