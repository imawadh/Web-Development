document.addEventListener("DOMContentLoaded",()=>{
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const tasklist = document.getElementById("tasklist");

    addTaskButton.addEventListener("click",addTask);
    function addTask()
    {
        const taskText = taskInput.value.trim();
        if (taskText==="")
        {
            alert("Please enter your task");
            return;
        }
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click",()=>{
            tasklist.removeChild(taskItem);
        });

        taskItem.appendChild(deleteButton);
        tasklist.appendChild(taskItem);
        
        
        taskInput.value="";

        
    }


});
