import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

 const itemEvent = (event) => {
      event.preventDefault();
      setInputList(event.target.value);
 };

 const listOfItems = () =>{
  setItems((oldItems) => {
    return [...oldItems, inputList]; 
  });
  setInputList("");

 };

 const deleteItems = (id) => {

  console.log("deleted");

  setItems((oldItems)=>{
    return oldItems.filter((arrElem, index)=>{
      return index !== id;
    })
  })


}

const editItem = (id) => {

  setEditing(id);

};






return (
<>
<div className="main">
  <div className="center"> 
      
     <h1>To-Do List</h1>
      
      <input type="text"  placeholder= "Add A Item" 
      value={inputList}
      onChange={itemEvent}/>
      <button onClick= {listOfItems}> + </button>

      <ol>
        {Items.map( (itemval, index) => {
          return <ToDoLists key={index} id={index} text= {itemval}
          onSelect={deleteItems} onEdit={() => editItem(index)}
          />;
        } )}
          

      </ol>
      {editing !== null && (

<input

  type="text"

  value={Items[editing]}

  onChange={(e) => {

    const newText = e.target.value;

    setItems((oldItems) => {

      return oldItems.map((item, index) => {

        if (index === editing) {

          return newText;

        }

        return item;

      });

    });

  }}

  onBlur={() => setEditing(null)}

  onKeyDown={(e) => {

    if (e.key === "Enter") {

      setEditing(null);

    }

  }}

/>

)}

  </div>
</div>
</>
);
};


export default App;
