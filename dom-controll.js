let container = document.createElement('div');
container.className = 'cards-container';
container.id = 'container';

let createBoard = function (board) {
    let boardContainer = document.createElement('div');
    boardContainer.className = 'card-item';

    let boardHeader = document.createElement('div');
    boardHeader.className = 'card-header';

    let boardHeaderTitle = document.createElement('div');
    boardHeaderTitle.className = 'card-header-title';

    let inputTitle = document.createElement("INPUT");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute('placeholder', board.title);
    inputTitle.className ='card-header-title-input';

    let headerIconDiv = document.createElement('div');
    headerIconDiv.className = 'card-header-icon' ;

    let headerIcon = document.createElement('input');
    headerIcon.setAttribute("type", "image");
    headerIcon.src = "./images/delete.svg";
    headerIcon.className = 'card-header-icon-img';
    headerIcon.addEventListener('click', function (e) {
        boardContainer.remove();
        /*deleteDashboardData(board.id)*/
    });

    let boardBody = document.createElement('div');
    boardBody.className = 'card-body';

    let footer = document.createElement('div');
    footer.className = 'class-footer';

    let inputTodo = document.createElement('input');
    inputTodo.setAttribute("type", "text");
    inputTodo.setAttribute('placeholder', "Add to do");
    inputTodo.className ='input-todos';


    headerIconDiv.appendChild(headerIcon);
    boardHeaderTitle.appendChild(inputTitle);
    boardHeader.appendChild(boardHeaderTitle);
    boardHeader.appendChild(headerIconDiv);

    boardContainer.appendChild(boardHeader);
    boardContainer.appendChild(boardBody);
    boardContainer.appendChild(footer);
    footer.appendChild(inputTodo);


    let renderAllTasks = function (boardBody, tasks) {
        tasks.map(createTask).forEach(function (tsk) {
            boardBody.appendChild(tsk)
        })
    };

    let renderTask = function(boardBody, task) {
        boardBody.appendChild(createTask(task))
    };

    let addNewTask = function(boardBody, task) {
        renderTask(boardBody, task);
        addTask(task);
    };

    inputTodo.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            addNewTask(boardBody, board.todos[0] )
        }
    });

    renderAllTasks(boardBody, board.todos);

    return boardContainer;
};

//create task

let createTask = function (task) {

    let boardItem = document.createElement('div');
    boardItem.className = 'card-body-item';


    let itemCheckbox = document.createElement("INPUT");
    itemCheckbox.setAttribute("type", "checkbox");
    itemCheckbox.className = 'card-body-checkbox';

    let titleItem = document.createElement('div');
    titleItem.className = 'card-body-title';
    titleItem.innerText = task.title;

    boardItem.appendChild(itemCheckbox);
    boardItem.appendChild(titleItem);

    let delBtn = document.createElement('input');
    delBtn.setAttribute("type", "image");
    delBtn.src = "./images/remove.svg";
    delBtn.className = 'remove-image';

    delBtn.addEventListener('click', function (e) {
        boardItem.remove();
        deleteTaskData(task.id)
    });
    boardItem.appendChild(delBtn);

    return boardItem;

};

let mainContainer = document.getElementById('main-container')
mainContainer.appendChild(container);


let renderAllBoards = function (container, boards) {
    boards.map(createBoard).forEach(function (brd) {
        container.appendChild(brd)
    })
};

let renderBoard = function(container, board) {
    container.appendChild(createBoard(board))
};

let addNewBoard = function(container, board) {
    renderBoard(container, board);
    addDashboard(board);
};

let addIcon = document.createElement('input');
addIcon.setAttribute("type", "image");
addIcon.src = "./images/Add.svg";
addIcon.className = 'add-image';
addIcon.addEventListener('click', function (e) {
    addNewBoard(container, newDashb)
});

container.appendChild(addIcon);

renderAllBoards(container, dashboars);

