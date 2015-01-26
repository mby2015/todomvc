define([
    'model/todo'
], function(
    Todo
) {

    /**
     * Todo들을 가진 Todolist.
     * @constructor
     */
    var Todolist = Backbone.Collection.extend({
        model: Todo,
        initialize: function() {

        }
    });

    return Todolist;
});