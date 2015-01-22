define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/todo.html'
], function($, _, Backbone, html) {
    var View = Backbone.View.extend({
        el: $('.main'),
        /**
         * 뷰를 생성하면서 초기화 된다.
         * 콜렉션이 변경될때 이벤트를 알려준다
         * @name initialize
         */
        initialize: function() {
            this.listenTo(this.collection, 'add', this.add);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.listenTo(this.collection, 'change:completed', this.filterOne);
            this.listenTo(this.collection, 'filter', this.filterAll);
            this.listenTo(this.collection, 'all', this.render);
        },
        /**
         * 항상호출, 콜렉션에 데이터가 있는지 없는지 여부에 따라 다른 뷰를 보여줄수 있음
         * @name render
         */
        render: function() {
        },
        /**
         * 모델에 데이터가 추가 될때 마다 실행된다
         * @name add
         * @param {object} model
         */
        add: function(todo) {
            var item = new ItemView({
                model: todo
            });
            $(this.el).append(item.render().el);
        }
    });

    var ItemView = Backbone.View.extend({
        tagName: 'li',
        /**
         * 뷰를 생성하면서 초기화 된다.
         * 모델이 변경될때 이벤트를 알려준다
         * @name initialize
         */
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'visible', this.toggle);
        },
        render: function() {
            return this;
        },
        remove: function() {
        },
        toggle: function() {

        }
    });

    return View;
});