define([
    '_',
    'Backbone',
    'model/todo'
], function(
    _,
    Backbone,
    Todo
    ) {

    var Todolist = Backbone.Collection.extend({
        model: Todo
    });

    return Todolist;
});