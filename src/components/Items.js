import React,{useContext,useEffect} from 'react';
import { makeStyles,withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom' 


const items=makeStyles({
    Items:{        
        width:"99%",
        height:"26px",
        backgroundColor: "#253053",
        border: "2px solid whitesmoke" ,
        textAlign:"center",
               

      }
})

function Items(props){
    
    const classes=items();
    return(
       <Link to={props.name==="Home"? "/":"Analysis"} style={{ textDecoration: 'none', color:"white" }} ><p className={classes.Items} >{props.name}</p></Link> 
       
          
    );}

export default Items;