import { useState, useEffect } from 'react'
const Input = ({ onAddTask,listLength }) => {
    const [newTask, setNewTask] = useState("")
    const [valid, setValid] = useState(false)
    useEffect(() => {
        if (newTask.length > 3&&listLength<10) {
            setValid(true) }
        else { setValid(false) }
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        setNewTask("")
        const value = {
            text: newTask,
            id: Math.random()
        }
        onAddTask(value)
    }
    return (
        <>
            <form id="add-task">
                <input className='task-input' disabled={(listLength>=10)} value={newTask} placeholder={(listLength>=10)?"Task List Full":"Add new task here"} onChange={(event) => {
                    setNewTask(event.target.value)
                }} />
                <button className='add-task-button' onClick={handleSubmit} disabled={!valid}>Add Task</button>
            </form>
        </>
    )
}
export default Input