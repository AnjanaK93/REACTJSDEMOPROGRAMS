import { useState } from "react";

function ToDoList(){
    const [newTask,setNewTask]=useState();
    const [allTasks,setAllTasks]=useState([
        {
            taskId:101,
            taskName:"Call a Friend",
            isTaskCompleted:false
        },
        {
            taskId:102,
            taskName:"Laundry",
            isTaskCompleted:false
        }
    ]);

    function handleToggleTask(taskId){
        let copyTask=[...allTasks];

        copyTask.forEach((eachTask)=>{
            if(eachTask.taskId==taskId)
                eachTask.isTaskCompleted = !eachTask.isTaskCompleted;

        })
        setAllTasks(copyTask);
        // let updatedTasks=allTasks.forEach(eachTask =>
        // {
        //     if(eachTask.taskId ==taskId) eachTask.isTaskCompleted =!eachTask.isTaskCompleted;
            
        // }
        // );
        // setAllTasks([...updatedTasks]);
    }
    function handleAddTask(){
        setAllTasks(
            [...allTasks,
            {
            taskId:allTasks[allTasks.length-1].taskId +1,
            taskName:newTask,
            isTaskCompleted:false
        }])
    }

    function handleDeleteTask(taskId){
        let filteredAllTasks = allTasks.filter((eachTask)=> eachTask.taskId !=taskId);
        setAllTasks(filteredAllTasks);
    }
    
  let mappedAllTasks = allTasks.map((eachTask) => (
    <li key={eachTask.taskId} className="list-group-item" onClick={()=>handleToggleTask(eachTask.taskId)}>
        {eachTask.taskName} {eachTask.isTaskCompleted ? "✔️" : ""}
       <div className="d-flex align-items-center">
    
    <button className="btn btn-warning"><i className="bi bi-check me-2 " onClick={()=>handleDeleteTask(eachTask.taskId)}></i>ADD</button>
</div>
    </li>
));

    //console.log(mappedAllTasks);

    return (
        <>
        <div className="container m-5">
            <h3>TO DO APP</h3>
            <div className="form-control-group">
                <input type="text" className="form-control" placeholder="Enter new task"
                onChange={(e)=>setNewTask(e.target.value)} />
            </div>
            <button className="btn btn-success my-2" onClick={handleAddTask}>ADD</button>
            <ul className="list-group">{mappedAllTasks}</ul>
        </div>

        </>
    );
}

export default ToDoList;