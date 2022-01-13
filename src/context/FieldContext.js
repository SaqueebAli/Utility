import React,{useState,createContext} from "react";

export const FieldContext=createContext();

export const FieldProvider=(props)=>{
    const [FieldName1,setFieldName1]=useState([])
    const [FieldName2,setFieldName2]=useState([])
    const [checkedData,setCheckedData]=useState({File1:"",File2:""});
    const [fileName,setFileName]=useState({FileName1:"Upload File 1",FileName2:" Upload File 2"});
    
   
    
    return(
        <FieldContext.Provider value={[FieldName1,setFieldName1,FieldName2,setFieldName2,checkedData,setCheckedData,fileName,setFileName]}>
        {props.children}
        </FieldContext.Provider>
    );
}

