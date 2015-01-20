define([
'view/todo',
'text!tmpl/todolist.html'
], function(
TodoV,
html
) {
    /**
     * 본체
     * constructor
     */
    var TodoList = Backbone.View.extend({
        el: 'div',
        className: 'todoView',
        template: _.template(html),
        initialize: function(opt) {
            // fixme todo view와 컬렉션이 너무 따로 논다.
            this.listenTo(this.model, 'add', this.render);
            this.el.html(this.template({
                name: opt.name
            }));
        },
        render: function(model) {
            var view = new TodoV(model);
            this.el.find('ul').append(view.el);
        }
    });

    return TodoList;
});