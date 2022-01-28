import React,{useEffect,useContext} from "react";
import { makeStyles,withStyles } from '@material-ui/styles';



const items=makeStyles({
    Items:{        
        width:"98%",
        height:"26px",
        border: "1px solid whitesmoke" ,
        textAlign:"center",
        color:"whitesmoke",
        fontWeight:"bolder",
        margin:"0",  
        borderRadius:"2%"


      },
      listItems:{
          // backgroundColor:"white",
          height:"400px",
          width:"100%",
          overflow:"auto",
          borderRadius:"2%"
        },
        heading:{        
          border: "2px solid whitesmoke" ,
          textAlign:"center",
          color:"whitesmoke",
          backgroundColor:"#253053",
          fontWeight:"bolder",
          borderRadius:"45px",
          position:"relative",
          fontSize:"0.95rem",
          padding:"2px",
          boxSizing: "border-box"     
        }
        
})

function Items(props){
    const classes=items();
    return(
       <p className={classes.Items} style={{backgroundColor:props.color}}>{props.name}</p>
       
          
    );}
export default function AnalysisFieldName(props) {
    if(props.uniqueFieldName!=undefined){

        var uniqueFields=Object.keys(props.uniqueFieldName);
    }
    const classes=items();
  
  //  function handleScroll(e) {
  //       let element = e.target
  //       if (element.scrollHeight - element.scrollTop === element.clientHeight) {
  //       //   alert("scrollend for: "+ props.name)
  //       }
  //     }
    
  return (<>

    {Object.keys(props.uniqueFieldName).length!=0 && <p className={classes.heading}>{props.filename}</p>}
       <div  className={classes.listItems}   >
       {uniqueFields && uniqueFields.map((e,i)=>{
       return <Items name={e.replace("@","")} key={i} color={props.uniqueFieldName[e]}/>
       })}
       
    </div>
  </>
  );
}