import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./reducers";

const TodoList = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task) {
      const newTask = { id: Date.now(), title: task };
      dispatch(addTask(newTask));
      setTask("");
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdateTask = (id, title) => {
    const updatedTask = { id, title };
    dispatch(updateTask(updatedTask));
  };
  return (
    <div>
      <input type="text" value={task} onChange={handleTaskChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {console.log(task)}
            <input type="text" value={task.title} onChange={(event) => handleUpdateTask(task.id, event.target.value)} />
            <button onClick={() => handleUpdateTask(task.id)}>update</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
