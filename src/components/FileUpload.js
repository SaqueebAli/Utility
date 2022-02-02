import React,{useRef,useState,useContext} from "react";
import { Grid ,makeStyles,withStyles } from '@material-ui/core';
import BTN from './btn';
// import SelectItems from '../components/SelectItems';
import VirtualList from "./VirtualList";
import {FieldContext} from "../context/FieldContext"; 
import DND from "./DND";
import VirtualisedDND from "./VirtualisedDND";
import { Link } from 'react-router-dom' 






const useStyles=makeStyles({
    root:{
       
        width:"100%",
        paddingTop:"100px",
        justifyContent:"center",
        // paddingLeft:"150px",
        height:"100%",
        marginBottom:"0",
        paddingBottom:"0"
        
    },
    Compare:{
        border: "2px solid whitesmoke" ,
        textAlign:"center",
        color:"whitesmoke",
        backgroundColor:"#253053",
        fontWeight:"bolder",
        borderRadius:"45px",
        position:"relative",
        fontSize:"0.95rem",
        padding:"2px",
        paddingRight:"5px",
        paddingLeft:"5px",
        boxSizing: "border-box",
        top:"14px",
        '&:hover':{
            border: "1px solid #24a0ed" ,
         }
    },
    
    
});


function FileUpload(){
    const [FieldName1,setFieldName1,FieldName2,setFieldName2,checkedData,setCheckedData,fileName,setFileName,File1,File2,setFile1,setFile2,PrimaryKey,setPrimaryKey,Loading,setLoading]=useContext(FieldContext);
  
    function CompareHandle(){
       console.log(checkedData)
       fetch("http://localhost:3500/uploadKeygen",{
          method: 'POST',
          body:JSON.stringify(checkedData),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
         
        });
        setLoading((prevState) => !prevState);
   
        

   }
    const classes=useStyles();
    
    return(

       <Grid container className={classes.root} direction='row'  spacing={0}>
          
          
          
           <Grid item xs={3} />
           <Grid item xs={3} >
           
            <>
           <BTN  fs="File1"  design={fileName["FileName1"]}/>
           
           
           <BTN  fs="File2"  design={fileName["FileName2"]}/>
           </>
           </Grid>
           <Grid item xs={1} ></Grid>
           <Grid item xs={2} >
           {/* <VirtualList name="File1" Fields={FieldName1} filename={fileName["FileName1"]}/>  */}
            {FieldName1.length>0  && <VirtualisedDND filename="File 1" name="File1"/> }         
           </Grid>
           
           <Grid item xs={2} >
           {FieldName2.length>0 && <VirtualisedDND filename="File 2" name="File2"/>}    
          
           {/* <VirtualList name="File2" Fields={FieldName2} filename={fileName["FileName2"]}/> */}
            
           
           </Grid>
           <Grid item xs={1} >
              { (FieldName1.length>0 && FieldName2.length>0) && <Link to="/Analysis"><button  type="button" className={classes.Compare} onClick={CompareHandle}>Compare</button></Link>
              }
           </Grid>
           
           
           
           
           
           
       </Grid>
          
    );}

export default FileUpload;