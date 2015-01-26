define([
    'model/todo',
    'model/todolist',
    'view/todo',
    'view/todolist',
    'model/app'
], function(
    TodoM,
    TodoListM,
    TodoV,
    TodoListV,
    AppModel
) {
    var todolistCol = new TodoListM();
    todolistCol.on('add', function(model) {

    });

    var model = new AppModel({
        name: 'Jein Todo'
    });
    var todolistView = new TodoListV({
        collection: todolistCol,
        model: model
    });


    $('body').append(todolistView.$el);

})