import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState("light");

  const taskSubmit = (event) => {
    event.preventDefault();
    let inputvar = event.target.elements.inputTask.value;
    if(inputvar !== ""){
      setTasks([...tasks, inputvar]);
      event.target.elements.inputTask.value = "";
    }
  }

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index-1, 1);
    setTasks(updatedTasks);
  }
  const updateTask = (index) => {
    let updatedTask = prompt("Enter the updated task");
    if(updatedTask !== null){
      const updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
      setTasks(updatedTasks);
    }
  }

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <>
      <div className={`p-2 App ${mode === "light" ? "bg-skyblue" : "bg-black"}`}>
        <div className='flex justify-around p-2 mt-4'>
          <h1 className="text-5xl font-bold text-center">My To-Do List</h1>
          <button onClick={changeMode} className='border-yellow-300 rounded-md p-2 border-2'>{mode === "light" ? "Dark Mode" : "Light Mode"}</button>
        </div>
        <hr className='w-3/6 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
        <form className='text-center' onSubmit={taskSubmit}>
          <input className='w-1/4 border-2 p-4 m-2 border-yellow-300' name= "inputTask" type="text" placeholder='Enter Your Task' />
          <button className='border-yellow-300 rounded-md p-4 border-2 hover:border-green-400' type='submit'>Add Task</button>
        </form>
        <div className='w-full text-center'>
          <ul className='text-center'>
            {tasks.map((task, index) => (
              <div className='flex border-2 justify-between p-2 m-2' key={index}>
                <li className='p-2 m-2 text-xl'>{index + 1}. {task}</li>
                <div className='p-2'>
                <button onClick={() => updateTask(index)} className='p-2 p-2 mr-2 border-2 hover:text-white border-green-400 hover:bg-green-900 hover:border-green-800'>Update</button>
                <button onClick={() => deleteTask(index)} className='p-2 p-2 border-2 hover:text-white border-red-400 hover:bg-rose-900 hover:border-rose-800'>Delete</button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
