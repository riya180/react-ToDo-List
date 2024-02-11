import react from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

export const Todo = ({task}) => {
    return (
        <div className="Todo" >
            <p> {task.task} <FaEdit /> <RiDeleteBin5Line /> </p>
             <div>
             
          
            </div>
     
        </div>
        
        
       
    )
}