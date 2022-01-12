import React,{useRef,useState,useContext} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function SelectLabels(props) {
  
  const [value, setValue] = React.useState("");
   
  const handleChange = (event) => {
    setValue(event.target.value);

  };
 

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-simple-select-helper-label" >{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={props.name}
          onChange={handleChange}
          
        >
          <MenuItem value=" ">
            <em>None</em>
          </MenuItem>
        
      
        {props.FieldName1 && props.FieldName1.map((e,i)=>{
       return <MenuItem value={e} key={i}>{e}</MenuItem>
       })}

       {props.FieldName2 && props.FieldName2.map((e,i)=>{
      return <MenuItem value={e} key={i}>{e}</MenuItem>
      })}
          
          
           

          
        </Select>
      </FormControl>
      
    </div>
  );
}