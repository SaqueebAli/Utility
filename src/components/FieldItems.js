import React from 'react'
import { Grid ,makeStyles,withStyles } from '@material-ui/core';


const fieldItems=makeStyles({
    fieldItems:{        
        width:"99%",
        height:"26px",
        backgroundColor: "#253053",
        border: "1px solid whitesmoke" ,
        textAlign:"center",
        

      }
})

function FieldItems(props){
    const classes=fieldItems();
    return(
        <Grid container className={classes.root} direction='column'spacing={2}  >
          
           
        <Grid item xs={3}>
      <p className={classes.fieldItems}>{props.name}</p> 
        
        </Grid>
        
        
        
        
    </Grid>
          
    );}
export default FieldItems;