import React,{useState,createContext} from "react";

export const FieldContext=createContext();

export const FieldProvider=(props)=>{
    const [FieldName1,setFieldName1]=useState([])
    const [FieldName2,setFieldName2]=useState([])
    const [checkedData,setCheckedData]=useState({File1:"",File2:"",File1ColumnName:[],File2ColumnName:[]});
    const [fileName,setFileName]=useState({FileName1:"Upload File 1",FileName2:"Upload File 2"});
    const [File1,setFile1]=useState({});  
    const [File2,setFile2]=useState({});
    const [PrimaryKey,setPrimaryKey]=useState([]);  
    const [Loading,setLoading]=useState(true);


    
   
    
    return(
        <FieldContext.Provider value={[FieldName1,setFieldName1,FieldName2,setFieldName2,checkedData,setCheckedData,fileName,setFileName,File1,File2,setFile1,setFile2,PrimaryKey,setPrimaryKey,Loading,setLoading]}>
        {props.children}
        </FieldContext.Provider>
    );
}

