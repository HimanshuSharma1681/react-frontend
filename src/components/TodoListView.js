import TodoItem from "./Todo";
import React, { Component ,useState, useEffect }  from 'react';
function TodoView(props){
return (
     <div>
           <ul>
               {props.todoList.map(todo =><TodoItem todo={todo} />)}
           </ul>

     </div>

)

}

export default TodoView;