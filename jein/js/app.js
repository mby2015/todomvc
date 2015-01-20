define([
    'model/todo',
    'model/todolist',
    'view/todo',
    'view/todolist'
], function(
    TodoM,
    TodoListM,
    TodoV,
    TodoListV
) {
    var todolistCol = new TodoListM();
    todolistCol.on('add', function(model) {
        console.log(model);
    });

})