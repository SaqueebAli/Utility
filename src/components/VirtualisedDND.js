import React, {useContext,useState,useEffect,useLayoutEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import { makeStyles, withStyles } from '@material-ui/styles';
import { FieldContext } from "../context/FieldContext";

const items = makeStyles({
    Items: {
        border: "1px solid whitesmoke",
        textAlign: "center",
        color: "whitesmoke",
        backgroundColor: "#24a0ed",
        fontWeight: "bolder",
        borderRadius: "45px",
        position: "relative",
        fontSize: "0.95rem",
        padding: "2px",
        boxSizing: "border-box"



    },
    heading: {
        border: "2px solid whitesmoke",
        textAlign: "center",
        color: "whitesmoke",
        backgroundColor: "#253053",
        fontWeight: "bolder",
        borderRadius: "45px",
        position: "relative",
        fontSize: "0.95rem",
        padding: "2px",
        boxSizing: "border-box"



    }


})




export default function VirtualList(props) {
    const [FieldName1,setFieldName1,FieldName2,setFieldName2,checkedData,setCheckedData,fileName,setFileName,File1,File2,setFile1,setFile2]=useContext(FieldContext);
    const [column,setColumnOrder]=useState((props.name==="File1"?FieldName1:FieldName2));

const classes = items();
useEffect(() => {
    if((checkedData["File1ColumnName"]).length<1){
    
        setCheckedData({...checkedData,"File1ColumnName":column})
    }
}, [checkedData["File1"]]);
useEffect(() => {
    if((checkedData["File2ColumnName"]).length<1){

        setCheckedData({...checkedData,"File2ColumnName":column})
    }
}, [checkedData["File2"]]);


function onValueChange(event){
setCheckedData({...checkedData,[event.target.name]:event.target.value})
   }
   
   
function handleOnDragEnd(event) {
    if(!event.destination)return;
    const result = Array.from(column);
  const [removed] = result.splice(event.source.index, 1);
  result.splice(event.destination.index, 0, removed);

  setColumnOrder(result)
  console.log(event)
  if(event.source.droppableId==="File1"){
    setCheckedData({...checkedData,"File1ColumnName":result}) 
}
else{
    setCheckedData({...checkedData,"File2ColumnName":result}) 
}

 

    }

    
    const cache = React.useRef(
        new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 100,
            minHeight: 25,
        })
        );
        
    return (

        <div style={{ width: "180px", height: "400px" }}>


            {column.length != 0 && <p className={classes.heading}>{props.filename}</p>}
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId={props.name} mode="virtual"  renderClone={(provided, snapshot, rubric) => (
                    <div className={classes.Items} style={provided.draggableProps.style}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        
                        
                        <label htmlFor={column[rubric.source.index]}>{column[rubric.source.index]}</label>
                        <input style={{ float: "right" }} type="radio" name={props.name} id={rubric.draggableId} value={column[rubric.source.index]} ></input>

                    </div>
                )}>
                    {
                        (provided, snapshot) => (
                            <div ref={provided.innerRef}  {...provided.droppableProps}>
                            {/* style={{ backgroundColor: snapshot.isDraggingOver ? 'blur(4px)' : '' }} */}
                                <List
                                    width={180}
                                    height={400}
                                    rowHeight={26}
                                    deferredMeasurementCache={cache.current}
                                    rowCount={column.length}
                                    rowRenderer={({ key, index, style, parent }) => {
                                        // const column = props.data[index];


                                        return (
                                            <CellMeasurer
                                                key={key}
                                                cache={cache.current}
                                                parent={parent}
                                                columnIndex={0}
                                                rowIndex={index}
                                            >
                                                {<Draggable draggableId={props.name+index} index={index} name={column[index]} style={style}>
                                                    {(provided) => (
                                                        <div className={classes.Items}  style={style} ref={provided.innerRef}{...provided.draggableProps} {...provided.dragHandleProps}>



                                                            <label htmlFor={column[index]}>{column[index]}</label>
                                                            <input style={{ float: "right" }} type="radio" name={props.name} id={props.name + index} value={column[index]} onChange={onValueChange} ></input>


                                                        </div>


                                                    )}
                                                </Draggable>
                                                }



                                            </CellMeasurer>
                                        );

                                    }}

                                />

                            </div>

                        )}

                </Droppable>
            </DragDropContext>
        </div>

    );
}