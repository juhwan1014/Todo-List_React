import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
         e.preventDefault();  
        
         props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
         })

         setInput('')

    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>

      {props.edit ? (

           <div className='update-form'>
           <input 
           type = 'text'
           placeholder='Update Item'
           value={input}
           name = 'text'
           className='todo-input'
           onChange={handleChange}
           />
           <button className='todo-button'>Update</button>
           </div>

      ) : (

        <div className='update-form'>
        <input 
        type = 'text'
        placeholder='Please Enter your ToDo'
        value={input}
        name = 'text'
        className='todo-input'
        onChange={handleChange}
        />
        <button className='todo-button'>Add Todo</button>
        </div>

      )}
     
        
        


    </form>
  )
}

export default TodoForm