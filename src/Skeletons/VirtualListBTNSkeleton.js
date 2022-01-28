import React,{useState,useContext,useEffect,useLayoutEffect} from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { makeStyles,withStyles } from '@material-ui/styles';
import { FieldContext } from "../context/FieldContext";





const button=makeStyles({
    pass:{        
        border: "1px solid whitesmoke" ,
        textAlign:"center",
        color:"whitesmoke",
        backgroundColor:"#ddd",
        fontWeight:"bolder",
       borderRadius:"45px",
       position:"relative",
       fontSize:"0.95rem",
        margin:"1px",
        boxSizing: "border-box",
        cursor: "pointer",
        animationName: "pulse",
        animationDuration:"4s",
        animationTimingFunction: "ease-in-out", 
        animationIterationCount :"infinite",
        animationDirection:"alternate",
        animationDelay:"1s",
      },
      fail:{
        border: "1px solid whitesmoke",
        textAlign:"center",
        color:"whitesmoke",
        backgroundColor:"#ddd",
        fontWeight:"bolder",
       borderRadius:"45px",
       position:"relative",
       fontSize:"0.95rem",
        margin:"1px",
        boxSizing: "border-box",   
        cursor: "pointer",
        animationName: "pulse",
        animationDuration:"4s",
        animationTimingFunction: "ease-in-out", 
        animationIterationCount :"infinite",
        animationDirection:"alternate",
        animationDelay:"1s",
      },
      heading:{        
        border: "2px solid whitesmoke" ,
        textAlign:"center",
        color:"whitesmoke",
        backgroundColor:"#ddd",
        height:"26px",
        fontWeight:"bolder",
        borderRadius:"45px",
        position:"relative",
        fontSize:"0.95rem",
        padding:"2px",
        boxSizing: "border-box",
        animationName: "pulse",
        animationDuration:"4s",
        animationTimingFunction: "ease-in-out", 
        animationIterationCount :"infinite",
        animationDirection:"alternate",
      }
      
     
})

const active={borderRadius:"45px",border: "3px solid #24a0ed" ,}
export default function VirtualListBTN(props) {

 
  const classes=button();
  function Button(btnprops){
    // const style=props.Styles
    return(
      <div style={btnprops.style} className={classes.pass} > 
      <center  id={btnprops.id} ></center>
        </div> 
    );}
   
      
   
      
    
  
    const cache = React.useRef(
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100,
        // fixedHeight:true,
      })
    );
    
   

      return (
                  
          <div style={{ width: "100%", height: "70%" }}>
          
  
          {<p className={classes.heading}></p>}
          
              <AutoSizer>
                {({ width, height }) => (
                  <List
                    width={width}
                    height={height}
                    rowHeight={26}
                    deferredMeasurementCache={cache.current}
                    rowCount={13}
                    rowRenderer={({ key, index, style, parent }) => {
                      const recordID = (["1","2","3","4","5","6","7","8","9","10"])[index];
      
                      return (
                        <CellMeasurer
                          key={key}
                          cache={cache.current}
                          parent={parent}
                          columnIndex={0}
                          rowIndex={index}
                        >
                        {                 
                          <Button value={recordID} id={recordID+index} style={style}/>
                          
                        
                        }
                    
         
                        </CellMeasurer>
                      );
                    }}
                  />
                )}
              </AutoSizer>
              </div>
      );
     

    }