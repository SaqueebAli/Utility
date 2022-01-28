import React,{useEffect,useContext} from "react";
import { makeStyles,withStyles } from '@material-ui/styles';



const items=makeStyles({
    ItemsSkeleton:{        
        width:"98%",
        height:"26px",
        border: "1px solid whitesmoke" ,
        textAlign:"center",
        color:"whitesmoke",
        fontWeight:"bolder",
        margin:"0",  
        borderRadius:"2%",
        animationName: "pulse",
        animationDuration:"3s",
        animationTimingFunction: "ease-in-out", 
        animationIterationCount :"infinite",
        animationDirection:"alternate",
        animationDelay:"3s",


      },
      listItemsSkeleton:{
          // backgroundColor:"white",
          height:"400px",
          width:"100%",
          overflow:"auto",
          borderRadius:"2%",
          animationName: "pulse",
          animationDuration:"3s",
          animationTimingFunction: "ease-in-out", 
          animationIterationCount :"infinite",
           animationDirection:"alternate",
           animationDelay:"3s",

        },
        headingSkeleton:{        
          border: "2px solid whitesmoke" ,
          textAlign:"center",
          color:"whitesmoke",
          backgroundColor:"#ddd",
          fontWeight:"bolder",
          borderRadius:"45px",
          height:"26px",
          position:"relative",
          fontSize:"0.95rem",
          padding:"2px",
          boxSizing: "border-box",
          animationName: "pulse",
          animationDuration:"3s",
          animationTimingFunction: "ease-in-out", 
          animationIterationCount :"infinite",
           animationDirection:"alternate", 
           animationDelay:"3s",
    
        }
        
})

function Items(props){
    const classes=items();
    return(
       <p className={classes.ItemsSkeleton} style={{backgroundColor:"#ddd"}}></p>
       
          
    );}
export default function AnalysisFieldName(props) {
   
    const classes=items();
      
  return (<>

    <p className={classes.headingSkeleton}></p>
       <div  className={classes.listItemsSkeleton}   >
       {["1","2","3","4","5","6","7","8","9","10"].map((e,i)=>{
       return <Items name={e.replace("@","")} key={i} />
       })}
       
    </div>
  </>
  );
}