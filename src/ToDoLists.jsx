import React from "react";

const ToDoLists = (props) => {
    const [isChecked, setIsChecked] = React.useState(false);
    const handleCheck = () => {

        setIsChecked(!isChecked);
    
      };

    return (
    <>
        <div className="todo">
        <i

            className={isChecked ? "fa-solid fa-square-check" : "fa-regular fa-square"}

            aria-hidden="true"
            

            onClick={handleCheck}

        />
        
        
        <i className="fa-solid fa-trash-can" aria-hidden="true" 
        
            onClick={()=>{
                props.onSelect(props.id);
            }} 
        />

        <i className="fa-regular fa-pen-to-square" aria-hidden="true" 
        
            onClick={()=>{
                props.onEdit(props.id);
            }} 
        />

            
             <li style={{ textDecoration: isChecked ? "line-through" : "none" }}>
                {props.text}
            </li>

        </div>
    
    </>
    );
    
};

export default ToDoLists;