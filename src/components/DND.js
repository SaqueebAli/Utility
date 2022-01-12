import React,{useState} from 'react';
import { DragDropContext,Droppable, Draggable } from 'react-beautiful-dnd';
import { makeStyles,withStyles } from '@material-ui/styles';

const items=makeStyles({
    Items:{        
        width:"99%",
        height:"26px",
        border: "1px solid whitesmoke" ,
        textAlign:"center",
        color:"whitesmoke",
        fontWeight:"bolder",
        margin:"0",  
        borderRadius:"2%"


      },
      listItems:{
          backgroundColor:"white",
          height:"400px",
          width:"100%",
          overflow:"auto",
          borderRadius:"2%"
        }
})

function Items(props){
    const classes=items();
    return(
       <button>

       <p className={classes.Items} style={{backgroundColor:props.color}}>{props.name}</p>
       </button>
       
          
    );}
export default function DND(props){
    
    return(
        <DragDropContext>
        <Droppable droppableId='items'>
        {
            (provided,snapshot)=>(
                <div ref={provided.innerRef} style={{backgroundColor:snapshot.isDraggingOver? 'blue':'grey'}} {...provided.droppableProps}>
                            { props.data && props.data.map((e,i)=>{
                                <Draggable draggableId={e+i}>
                                {
                                    (provided)=>
                                        {

                                    (

                                    {/* <div ref={provided.innerRef}{...provided.draggableProps} name="File 1" Fields={FieldName1}/>
                                            <Items name={e} key={i} color={props.data[e]}/>
                                         </div> */}
                                    )
                                        
                                        
                                        }
                                    
                                }
                                </Draggable>
                    })}
                </div>
            )
        }

        </Droppable>
    </DragDropContext>
    );
}