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
        el: '#todoMvc',
        className: 'todoView',
        template: _.template(html),
        events: {
            'click button': 'addOne'
        },
        initialize: function() {
            // fixme todo view와 컬렉션이 너무 따로 논다.
            this.listenTo(this.collection, 'add', this.add);
            this.listenTo(this.collection, 'remove', this.remove);
            this.$el.html(this.template(this.model.attributes));
        },
        /**
         * 입력한 값을 모델로 추가한다.
         */
        addOne: function() {
            this.collection.add({
                value: this.$el.find('input').val()
            });
        },
        /**
         * 모델을 추가할때 발생하는 이벤트 콜백
         * @param {object} model 추가되는 모델
         */
        add: function(model) {
            var view = new TodoV({
                model: model
            });
            view.render();
            this.$el.find('ul').append(view.$el);
        }
    });

    return TodoList;
});