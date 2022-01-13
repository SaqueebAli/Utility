import React,{useState,useContext,useEffect} from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { makeStyles,withStyles } from '@material-ui/styles';
import { FieldContext } from "../context/FieldContext";





const items=makeStyles({
    Items:{        
        border: "1px solid whitesmoke" ,
        textAlign:"center",
        color:"whitesmoke",
        backgroundColor:"#24a0ed",
        fontWeight:"bolder",
       borderRadius:"45px",
       position:"relative",
       fontSize:"0.95rem",
        padding:"2px",
        boxSizing: "border-box"     
       


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

export default function VirtualList(props) {
  
  const [FieldName1,setFieldName1,FieldName2,setFieldName2,checkedData,setCheckedData]=useContext(FieldContext);

  

 function onValueChange(event){

  setCheckedData({...checkedData,[event.target.name]:event.target.value})

   

 }

    
    const cache = React.useRef(
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100,
        minHeight:25,
      })
    );
    const classes=items();
    return (
                
        <div style={{ width: "180px", height: "400px" }}>
        

        {props.Fields.length!=0 && <p className={classes.heading}>{props.filename}</p>}
        
            <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={height}
                  rowHeight={26}
                  deferredMeasurementCache={cache.current}
                  rowCount={props.Fields.length}
                  rowRenderer={({ key, index, style, parent }) => {
                    const person = props.Fields[index];
    
                    return (
                      <CellMeasurer
                        key={key}
                        cache={cache.current}
                        parent={parent}
                        columnIndex={0}
                        rowIndex={index}
                      >
                      {<>
                        <div   className={classes.Items} style={style}>
                        
                        
              
                       <label  htmlFor={person}>{person}</label>
                        <input   style={{float:"right"}} type="radio" name={props.name} id={person+index} value={person} onChange={onValueChange}></input>
                         
                         
                       </div>
                       

                      </>
                      
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