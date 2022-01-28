import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { makeStyles, withStyles } from '@material-ui/styles';

const items = makeStyles({
    Items: {
        width: "99%",
        height: "26px",
        border: "1px solid whitesmoke",
        textAlign: "center",
        color: "whitesmoke",
        fontWeight: "bolder",
        margin: "0",
        borderRadius: "2%"


    },
    listItems: {
        backgroundColor: "white",
        height: "400px",
        width: "100%",
        overflow: "auto",
        borderRadius: "2%"
    }
})

function Items(props) {
    const classes = items();
    return (
        <button>

            <p className={classes.Items} style={{ backgroundColor: blue }}>{props.name}</p>
        </button>


    );
}
export default function DND(props) {

    

    return (
        <DragDropContext>
            <Droppable droppableId='id1'>
                {
                    (provided, snapshot) => (
                        <div ref={provided.innerRef} style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'white' }} {...provided.droppableProps}>
                            {(props.data).map((e, index) => (
                                <Draggable draggableId={e + index}>
                                    {
                                        (provided) =>


                                        (



                                            <div ref={provided.innerRef}{...provided.draggableProps} {...provided.dragHandleProps}>
                                                 <p style={{ color: "black" }}>{e}</p>
                                                
                                            </div>
                                        )




                                    }
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }

            </Droppable>
        </DragDropContext>
    );
}