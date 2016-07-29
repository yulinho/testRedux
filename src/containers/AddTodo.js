import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value)) //用一个 Action 对象来描述我们的行为
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit"  style={{cursor:"pointer"}}>
          ♥ Add Todo
        </button>

      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo