define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/item.html'
], function($, _, Backbone, html) {
    var ItemView = Backbone.View.extend({
        tagName: 'li',
        template: _.template(html),
        events: {
            'click #item': 'toggleCompleted'
        },
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
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        clear: function() {
        },
        toggleCompleted: function() {
            this.model.toggle();
        },
        edit: function() {
        }
    });
    return ItemView;
});