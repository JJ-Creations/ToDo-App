import Input from './Input'
import Card from './Card'
import { useState, useEffect } from 'react'

const Task = () => {
    const [taskList, setTaskList] = useState([]);

    const handleGetTasks = async () => {
        const response = await fetch("http://localhost:8010");
        const data = await response.json();
        setTaskList(data.map((item) => ({
            id: item.task_id,
            text: item.task_name
        })
        ));
        console.log(data);
    };
    useEffect(()=>{
        handleGetTasks();
    },[]);

    const handleNewTask = async (newTask) => {
        const body = {
            task_id: newTask.id,
            task_name: newTask.text
        };
        await fetch("http://localhost:8010", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        await handleGetTasks();
    };
    const handleDelete = async (id) => {
        await fetch("http://localhost:8010/" + id, {
            method: "DELETE",
        });
        await handleGetTasks();
    };

    return (
        <>
            <header className='heading'>My Todo List</header>
            <div id='tasks'>
                <Input onAddTask={handleNewTask} listLength={taskList.length} />
                {taskList.map((task) => {
                    return <Card key={task.id} props={task} onDelete={handleDelete} />
                })}
            </div>
        </>
    )
}
export default Task