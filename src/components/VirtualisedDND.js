import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";
import { makeStyles, withStyles } from '@material-ui/styles';

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
    function onDragEnd(result) {
        console.log(result)
    }


    const cache = React.useRef(
        new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 100,
            minHeight: 25,
        })
    );
    const classes = items();
    return (

        <div style={{ width: "180px", height: "400px" }}>


            {props.data.length != 0 && <p className={classes.heading}>{props.filename}</p>}
            <DragDropContext>
                <Droppable droppableId='droppable' mode="virtual" onDragEnd={onDragEnd} renderClone={(provided, snapshot, rubric) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
        {console.log(rubric)}
        </div>
      )}>
                    {
                        (provided, snapshot) => (
                            <div ref={provided.innerRef} style={{ backgroundColor: snapshot.isDraggingOver ? 'grey' : '' }} {...provided.droppableProps}>

                                <List
                                    width={180}
                                    height={400}
                                    rowHeight={26}
                                    deferredMeasurementCache={cache.current}
                                    rowCount={props.data.length}
                                    rowRenderer={({ key, index, style, parent }) => {

                                        const person = props.data[index]

                                        return (
                                            <CellMeasurer
                                                key={key}
                                                cache={cache.current}
                                                parent={parent}
                                                columnIndex={0}
                                                rowIndex={index}
                                            >
                                                {<Draggable draggableId={person + index} index={index} name={person}>
                                                    {(provided) => (
                                                        <div className={classes.Items} style={style} ref={provided.innerRef}{...provided.draggableProps} {...provided.dragHandleProps}>



                                                            <label htmlFor={person}>{person}</label>
                                                            <input style={{ float: "right" }} type="radio" name={props.name} id={person + index} value={person} ></input>


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