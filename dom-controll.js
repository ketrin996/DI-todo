let createBoard = function (board) {
    let boardContainer = document.createElement('div');
    boardContainer.className = 'card-item';

    let boardHeader = document.createElement('div');
    boardHeader.className = 'card-header';

    let boardHeaderTitle = document.createElement('div');
    boardHeaderTitle.className = 'card-header-title';

    let inputTitle = document.createElement("INPUT");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("value", dashboars[0].title);
    inputTitle.className ='card-header-title-input';

    let headerIconDiv = document.createElement('div');
    headerIconDiv.className = 'card-header-icon' ;

    let headerIcon = document.createElement('img');
    headerIcon.src = "./images/delete.svg";

    let boardBody = document.createElement('div');
    boardBody.className = 'card-body';

    let footer = document.createElement('div');
    footer.className = 'class-footer';

    let inputTodo = document.createElement('input');
    inputTodo.setAttribute("type", "text");
    inputTodo.setAttribute("value", "Add to do");
    inputTodo.className ='input-todos';

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.addEventListener('click', function (e) {
        boardContainer.remove();
        deleteDashboardData(board.id)
    });

    headerIconDiv.appendChild(headerIcon);
    boardHeaderTitle.appendChild(inputTitle);
    boardHeader.appendChild(boardHeaderTitle);
    boardHeader.appendChild(headerIconDiv);

    footer.appendChild(inputTodo);

    boardBody.appendChild(footer);

    boardContainer.appendChild(boardHeader);
    boardContainer.appendChild(boardBody);
    footer.appendChild(inputTodo);
    footer.appendChild(delBtn);
    boardContainer.appendChild(footer);
    return boardContainer;
};

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

let deleteAllBoards = function(container) {
    while(container.firstChild) {
        container.firstChild.remove()
    }
};

let container = document.getElementById('container');
let addBtn = document.getElementById('add');

renderAllBoards(container, dashboars);

if(addBtn) {
    addBtn.addEventListener('click', function (e) {
        addNewBoard(container, dashboars[0])
    });
}
