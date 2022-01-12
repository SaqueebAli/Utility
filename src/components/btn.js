import React,{useRef,useState,useContext} from "react";
import * as XLSX from 'xlsx';
import {FieldContext} from "../context/FieldContext";
import {makeStyles,withStyles } from '@material-ui/core';



const useStyles=makeStyles({
  input:{
     
    position: "absolute",
    textOverflow: "ellipsis", 
    top: "0",
    bottom: "0",
   right: "0",
   width: "100%",
    height:"100%",
   opacity: "0",
   boxShadow :" 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
      
  }
  ,
  label:{
    margin: "0",
    color: "whitesmoke",
   padding: "5px",
    /* width:14vw; */
    borderRadius : "45px",
  position: "relative",
  /* background-color:#253053; */
  backgroundColor: 	"#24a0ed ",
  whiteSpace: "nowrap",
  width: "180px",
  height: "20px",
  justifyContent:"center",
  textAlign: "center",
  marginBottom: "10px",
  textOverflow: "ellipsis" 
    
  }
  
});

function BTN(props) {
   
  
  
  const classes=useStyles();
  const [names,setNames]=useState(props.name)
  const [FieldName1,setFieldName1,FieldName2,setFieldName2]=useContext(FieldContext);
     

  async function ChangeValue(evt){  
   var selectedFile=evt.target.files[0];
   var keys=evt.target.id
   
   
   setNames(selectedFile.name);
   var filename=(selectedFile.name).split('.')[0]+".json";
   filename=filename+"/"+props.fs;
    var reader = new FileReader();
    reader.onload = function (event) {
        var data = event.target.result;
        let workbook = XLSX.read(data, {type:"binary", cellDates: false});    
        workbook.SheetNames.forEach(function(sheetName){
          var rowObject=XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName],{
              raw:false,
              dateNF: "DD-MMM-YYYY",
              
             
            }); 
            
            var values=Object.keys(rowObject[0])
            if(keys==="Upload file1"){
              
              setFieldName1(values )    
              
            }
            else{
              
              setFieldName2(values) 
            }
            
          // console.log(rowObject);
        var blob = new Blob([JSON.stringify(rowObject)],{type: 'application/json'});
        var formData = new FormData();
        formData.append('myFile', blob, filename);
        fetch("http://localhost:3500/upload",{
          method: 'POST',
          body:formData ,
          cache: "no-store",
          processData: true
        });
        });
        };
        
        reader.readAsBinaryString(selectedFile)

  };
  
    
    
    return (<div className="uploadField">
    <label className={classes.label} htmlFor={props.name} id={props.name+"1"} >{names}
   </label>
   <input className={classes.input} type="file" id={props.name} name= {props.name} onChange={ChangeValue}/>
    
    </div>);
}


export default BTN;
