let deleteTaskData = function(task_id) {
    let taskIdx = dashboars[0].findIndex(function(i) {
        return i.id === task_id;
    });
    dashboars.splice(taskIdx, 1);
    console.log(dashboars)
};

let addTask = function(task) {
    dashboars.push(task);
    console.log(task)
};
