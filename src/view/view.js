define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/todo.html'
], function($, _, Backbone, html) {
    var View = Backbone.View.extend({
        el: $('.main'),
        initialize: function() {
            this.model.bind('reset', this.render, this);
        },
        render: function() {
            _.each(this.model.models, function(todo){
                //var item = new ItemView({
                //    model: todo
                //});
                //$(this.el).item.render().el;
            }, this);
            return this;
        }
    });

    //var ItemView = Backbone.View.extend({
    //    tagName: 'li',
    //    initialize: function() {
    //
    //    },
    //    render: function() {
    //
    //    }
    //});

    return View;
});