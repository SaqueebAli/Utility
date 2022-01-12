import React,{useEffect,useState,useContext} from "react";
import { Grid ,makeStyles,withStyles } from '@material-ui/core';
import AnalysisFieldName from "./AnalysisFieldName";








const useStyles=makeStyles({
    root:{
       
        width:"100%",
        paddingTop:"100px",
        justifyContent:"center",
        paddingLeft:"300px"
        
    }
    
});


function Analysis(){
    const [uniqueFieldName,setUniqueFieldName]=useState({});  
    useEffect(()=> {
        fetch('http://localhost:3500/uniqueFieldsName')
        .then(response =>response.json())            
        .then(data =>{
             
            setUniqueFieldName(data);

        }) ;
        
        } ,[]) 
        console.log(uniqueFieldName)
    const classes=useStyles();
    return(

       <Grid container className={classes.root} direction='row' spacing={2} >        
          <Grid item xs={3}>
          
          <AnalysisFieldName name="column Name" uniqueFieldName={uniqueFieldName} />
           </Grid>
           <Grid item xs={2}>

           </Grid>
           <Grid item xs={3}>
           <AnalysisFieldName name="file 1 data"/>
           </Grid>
           
           <Grid item xs={3}>
            
           <AnalysisFieldName name="file 2 data"/>
           </Grid>
       </Grid>
          
    );}

export default Analysis;