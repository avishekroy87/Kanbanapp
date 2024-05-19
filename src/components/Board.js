import { useState } from "react";

const Board = () => {
 
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [tasklist, setTasklist] = useState([]);
  const [tasklistInprog, setTasklistInprog] = useState([]);
  const addTask = (id) => {
    var taskPrep = { 'id': id,'task': task, 'title': title, status: 'defined' }
    setTasklist([...tasklist, taskPrep])
    setTitle('')
    setTask('')
    console.log('taskArr', tasklist)
  }

  const addToInprogress = (id) => {
    setTasklist(tasklist.map(task => {
      if (task.id === id) {
        console.log('id', task.id)
      return {...tasklist, status: 'inprogress'};
      } else {
      return task;
      } 
      }));
      
  }

  return (
    <div className="container m-auto grid grid-cols-3 gap-2">
      <h1 className="text-center font-bold from-stone-950">Kanban</h1>
      <div className="define">
        
        <label for="Task Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task Title" value={title} onChange={(event) => setTitle(event.target.value)} required />


        <label for="taskdescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
        <textarea id="taskdescription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task Description" onChange={(event) => setTask(event.target.value)} value={task}></textarea>
        <button onClick={addTask(tasklist.length + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+Add Tasks</button>

        <div >
          <h4>Task Lists</h4>
          {tasklist.map((takshow, index) =>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id={index}>
              <h3 className="text-white	">{takshow.title}</h3>
              <hr></hr>
              <p className="text-white	">{takshow.task}</p>
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => addToInprogress(index + 1)}>+ Add to inprogress</a>

            </div>
          )}
        </div>
      </div>
      <div >
        <h1>In Progress</h1>
        {/* {tasklistInprog.filter((x)=>x.status == 'completed').map((taskdep) => 
            <div style={{border:"1px solid"}}>
                <h3>{taskdep.title}</h3>
                <p>{taskdep.task}</p>
                <a href="#" onClick={addToCompleted(taskdep.title)}>+ to completed</a>
            </div>
            )} */}
      </div>
      <div >
        <h1>Completed</h1>
      </div>
    </div>
  );
};
export default Board;
