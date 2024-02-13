import { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(value, task.id)
        setValue('')
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                value={value}
                placeholder="what's To update"
                onChange={(e) => setValue(e.target.value)}
            ></input>
            <button type="submit">Update</button>
        </form>
    )
}
