import react, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
uuidv4()

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ])
        console.log(todos)
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    return (
        <div className="TodoWraper">
            <h1>Get things Done</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} deleteTodo={deleteTodo} />
            ))}
        </div>
    )
}
