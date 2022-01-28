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
        backgroundColor:"#3CB043",
        fontWeight:"bolder",
       borderRadius:"45px",
       position:"relative",
       fontSize:"0.95rem",
        margin:"1px",
        boxSizing: "border-box",
        cursor: "pointer",
      },
      fail:{
        border: "1px solid whitesmoke",
        textAlign:"center",
        color:"whitesmoke",
        backgroundColor:"#990f02",
        fontWeight:"bolder",
       borderRadius:"45px",
       position:"relative",
       fontSize:"0.95rem",
        margin:"1px",
        boxSizing: "border-box",   
        cursor: "pointer",
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

const active={borderRadius:"45px",border: "3px solid #24a0ed" ,}
export default function VirtualListBTN(props) {

  const [FieldName1,setFieldName1,FieldName2,setFieldName2,checkedData,setCheckedData,fileName,setFileName,File1,File2,setFile1,setFile2]=useContext(FieldContext);
 const [clicked,setClicked]=useState()
  const classes=button();
  function Button(btnprops){
    return(
      <div style={btnprops.style} className={btnprops.color==="red"?classes.fail:classes.pass} > 
      <center onClick={handleClick} id={btnprops.id} style={clicked?{border:"2px solid blue"}:null} style={clicked===btnprops.id?active:{}}>{btnprops.value}</center>
        </div> 
    );}
   
      
    function handleClick(event){   
        setClicked(event.target.id)
        // console.log(event.target.id)
        event.target.style["color"]="blue"
        var date=event.target.innerText
        fetch('http://localhost:3500/'+event.target.innerText)
        .then(response =>response.json())            
        .then(data =>{
          var fl1=(data["File1"])            
          var fl2=(data["File2"])            
          setFile1(fl1)
          setFile2(fl2)
        }) ;
      
    }
  
    const cache = React.useRef(
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100,
        // fixedHeight:true,
      })
    );
    
   

      return (
                  
          <div style={{ width: "100%", height: "70%" }}>
          
  
          {(Object.keys(props.Fields)).length!=0 && <p className={classes.heading}>Primary Key</p>}
          
              <AutoSizer>
                {({ width, height }) => (
                  <List
                    width={width}
                    height={height}
                    rowHeight={26}
                    deferredMeasurementCache={cache.current}
                    rowCount={(Object.keys(props.Fields)).length}
                    rowRenderer={({ key, index, style, parent }) => {
                      const recordID = (Object.keys(props.Fields))[index];
      
                      return (
                        <CellMeasurer
                          key={key}
                          cache={cache.current}
                          parent={parent}
                          columnIndex={0}
                          rowIndex={index}
                        >
                        {                 
                          <Button value={recordID} id={recordID+index}  color={props.Fields[recordID]} style={style}/>
                          
                        
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