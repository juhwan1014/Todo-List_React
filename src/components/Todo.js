import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Todo({todos, completeTodo }) {

  const [edit, setEdit] = useState({
    id: null,
    value:''
  })

  const submitEdit = value => {
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value:''
    })
  }

  if(edit.id){
    return <TodoForm edit={edit} onSubmit = {submitEdit} />
   }

  return todos.map((todo, index) => (
   
   <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
      {todo.text}
    </div>
    <div className='icons'>
       <RiCloseCircleLine 
       />
       <TiEdit
       />
    </div>
   </div> 
    

  ))
}

export default Todo