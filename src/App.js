import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => {
        setShowForm(false);
        setTaskToEdit(null);
    };

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setTaskToEdit(null);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const showEditForm = (task) => {
        setTaskToEdit(task);
        setShowForm(true);
    };

    return (
        <Container className="my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-center">Task List</h1>
                <Button variant="primary" onClick={handleShowForm} className="add-task-btn">
                    + Add Task
                </Button>
            </div>
            <TaskList tasks={tasks} deleteTask={deleteTask} showEditForm={showEditForm} />
            <TaskForm
                show={showForm}
                handleClose={handleCloseForm}
                addTask={addTask}
                editTask={editTask}
                taskToEdit={taskToEdit}
            />
        </Container>
    );
};

export default App;
