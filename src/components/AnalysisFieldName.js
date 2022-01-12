import React,{useEffect,useContext} from "react";
import { makeStyles,withStyles } from '@material-ui/styles';



const items=makeStyles({
    Items:{        
        width:"99%",
        height:"26px",
        border: "1px solid whitesmoke" ,
        textAlign:"center",
        color:"whitesmoke",
        fontWeight:"bolder",
        margin:"0",  
        borderRadius:"2%"


      },
      listItems:{
          backgroundColor:"white",
          height:"400px",
          width:"100%",
          overflow:"auto",
          borderRadius:"2%"
        }
})

function Items(props){
    const classes=items();
    return(
       <a href="" style={{ textDecoration: 'none'}}><p className={classes.Items} style={{backgroundColor:props.color}}>{props.name}</p></a> 
       
          
    );}
export default function AnalysisFieldName(props) {
    if(props.uniqueFieldName!=undefined){

        var uniqueFields=Object.keys(props.uniqueFieldName);
    }
    const classes=items();
  
   function handleScroll(e) {
        let element = e.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        //   alert("scrollend for: "+ props.name)
        }
      }
    
  return (
       <div  className={classes.listItems}  onScroll={handleScroll} >
       {uniqueFields && uniqueFields.map((e,i)=>{
       return <Items name={e} key={i} color={props.uniqueFieldName[e]}/>
       })}
       
    </div>
  );
}