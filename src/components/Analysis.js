import React,{useEffect,useState,useContext, useLayoutEffect} from "react";
import { Grid ,makeStyles,withStyles } from '@material-ui/core';
import AnalysisFieldName from "./AnalysisFieldName";
import VirtualListBTN from "./VirtualListBTN";
import VirtualListFields from "./VirtualListFields";
import {FieldContext} from "../context/FieldContext"; 
import AnalysisFieldNameSkeleton from "../Skeletons/AnalysisFieldNameSkeleton";
import VirtualListBTNSkeleton from "../Skeletons/VirtualListBTNSkeleton";
import { useLocation } from 'react-router-dom'









const useStyles=makeStyles({
    root:{
       
        width:"100%",
        paddingTop:"100px",
        justifyContent:"center",
        paddingLeft:"300px",
        height:"100vh",
        overflow:"auto",
        
    }
    
});


  

function Analysis(){
    const [FieldName1,setFieldName1,FieldName2,setFieldName2,checkedData,setCheckedData,fileName,setFileName,File1,File2,setFile1,setFile2,PrimaryKey,setPrimaryKey,Loading,setLoading]=useContext(FieldContext);
    const [uniqueFieldName,setUniqueFieldName]=useState({}); 
    
    useEffect(() => {
        let isMounted = true; 
        fetch('http://localhost:3500/primaryKey')
            .then(response =>response.json())            
            .then(data =>{
                //  console.log(data)
                setPrimaryKey(data);
            }) ;
      }, [Loading]);

     
    useEffect(()=> {
        fetch('http://localhost:3500/uniqueFieldsName')
        .then(response =>response.json())            
        .then(data =>{
             
            setUniqueFieldName(data);
        }) ;
        
        } ,Loading) 

      
        // console.log(uniqueFieldName)
    const classes=useStyles();
    return(

       <Grid container className={classes.root} direction='row' spacing={1} >        
          <Grid item xs={2}>
          {Loading && <VirtualListBTNSkeleton/>}
          {!Loading && <VirtualListBTN name="File1" Fields={PrimaryKey} filename={fileName["FileName1"]}/>} 
          {/* <VirtualListBTN /> */}
          {/* <AnalysisFieldName name="column Name" uniqueFieldName={PrimaryKey} filename="File 1"/> */}
           </Grid>
           <Grid item xs={2}>
           </Grid>
           <Grid item xs={2}>

          {!Loading  && <AnalysisFieldName name="column Name" uniqueFieldName={uniqueFieldName} filename="File 1"/>}
          {Loading && <AnalysisFieldNameSkeleton/>}
           {/* <VirtualListFields name="File1" Fields={FieldName1} filename={fileName["FileName1"]}/> */}
           </Grid>
           <Grid item xs={2} >

           <AnalysisFieldName name="File 1 " uniqueFieldName={File1} filename={fileName["FileName1"]}/>
          
           </Grid>
           
           <Grid item xs={2}>
            
           <AnalysisFieldName name="File 2" uniqueFieldName={File2} filename={fileName["FileName2"]}/>
          
           </Grid>
           <Grid item xs={2}>
           {!Loading &&  <AnalysisFieldName name="column Name" uniqueFieldName={uniqueFieldName} filename="File 2" />}
           {Loading && <AnalysisFieldNameSkeleton/>}
           </Grid>
       </Grid>
          
    );}

export default Analysis;