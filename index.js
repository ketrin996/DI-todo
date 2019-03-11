var sum = function(a){
    return (b) => {
        return a + b;
    }
};

function sumN(a) {

    var currentSum = a;

    function f(b) {
        if (b !== undefined) {
            currentSum += b;
            return f;
        }
        else
        {
            return currentSum;
        }
    }

    f.toString = function () {
        return currentSum;
    };
    return f;
}
   // console.log(sumN(1)(2)(3)(5));

    var todoData = [
        {
            title: 'todoBlock1',
            todos: [{
                text: 'todotext',
                completed: false,
            }]
        },
        {
            title: 'todoBlock2',
            todos: [{
                text: 'todotext',
                completed: false,
            },
                {
                    text: 'todotext2',
                    completed: false,
                }]
        },
    ];

    function addTodo(boardList, groupIndex, taskText) {
        boardList[groupIndex].todos.push(
            {
                text: taskText,
                compleated: false
            });
    }

    function addTodoBoard(boardList, newBoard) {
        boardList.push(newBoard);
    }

    function deleteBoard(boardList, groupIndex) {
        delete boardList[groupIndex];
    }

    function deleteTodo(boardList, groupIndex, taskIndex) {
        delete boardList[groupIndex].todos[taskIndex];
    }

    function changeTaskStatus(boardList, groupIndex, taskIndex) {
        let status = boardList[groupIndex].todos[taskIndex].completed;
        (status === false) ? boardList[groupIndex].todos[taskIndex].completed = true :
            boardList[groupIndex].todos[taskIndex].completed = false;
    }
//deleteBoard(todoData, 0);
//addTodo(todoData, 0, 'dosomething');
//addTodoBoard(todoData, board);
//deleteTodo(todoData, 1, 1);
//changeTaskStatus(todoData, 1, 0);

