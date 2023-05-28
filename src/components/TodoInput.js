import React, { useState } from 'react'

function TodoInput(props) {

    const [inputText,setInputText] = useState('')
  return (
    <div>
        <div className="input-container">
            <input type="text" 
            className='input-box-todo'
            placeholder='Enter Your Tasks'
            value={inputText}
            onChange={e=>{
                setInputText(e.target.value)
            }}/>
            <button className='add-btn'
            onClick={()=>{
                props.addList(inputText)
                setInputText("")
            }}>➕</button>
        </div>
    </div>
  )
}

export default TodoInput
