import React,{useEffect,useState} from "react";
import BTN,{FieldName} from './btn'



function FieldList(props){
    const [field, setField] = useState([]);
    // useEffect(() => {
    //     setField(["test","first"]);
    // })
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        // const temp=FieldName();
        // setField(FieldName())
        return(<>
            {field.map((e)=><h1>{e}</h1>)} 
        </>
        );
    }
    return (<></>);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   fetch('/api/data')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
  
    // return (
    //   <ul>
    //     {data.map((item) => (
    //       <li key={item.id}>{item.name}</li>
    //     ))}
    //   </ul>
    // );
   

};

export default FieldList;
