import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = () => {
    return (
        <div className="Todo">
            <p>go to school</p>
          
            <div>
            <FontAwesomeIcon icon="fa-solid fa-nfc-pen" />
                <FontAwesomeIcon icon='faPeToSquare'/>
                <FontAwesomeIcon icon='faTrash' />
                <FontAwesomeIcon icon="fas fa-edit" />
                
                
                

            </div>
     
        </div>
        
        
       
    )
}