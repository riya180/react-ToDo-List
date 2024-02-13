import './styles.css'
export const Todo = ({ task, deleteTodo, editTodo }) => {
    return (
        <div className="todo">
            <div className="todoItem">{task.task}</div>
            <div className="todoItem">
                <button onClick={() => editTodo(task.id)}>Edit</button>
            </div>
            <div className="todoItem">
                <button onClick={() => deleteTodo(task.id)}>Delete</button>
            </div>
        </div>
    )
}
