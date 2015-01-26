define([
    'text!tmpl/view.html',
    'underscore',
    'backbone',
    'jquery'
], function(
    html
) {
    /**
     * Todo의 Item의 view를 관리한다.
     * @constructor
     */
    var Todo = Backbone.View.extend(/** @lends Todo.prototype */{
        tagName: 'li',
        className: 'todo',
        events:{
            'click .complete': 'complete'
        },
        template: _.template(html),
        initialize: function() {
            this.listenTo(this.model, 'change:complete', this.render);
        },
        /**
         * 클릭시 속성이 변경되게 한다.
         */
        complete: function() {
            this.model.set('complete', !this.model.get('complete'));
        },
        render: function() {
            this.$el.html(this.template({
                complete: this.model.get('complete') ? 'comp' : 'incomp',
                value: this.model.get('value')
            }));
            console.log(this.template({
                complete: this.model.get('complete') ? 'comp' : 'incomp',
                value: this.model.get('value')
            }))
        }
    });

    return Todo;

});