define(['underscore', 'backbone'], function(_, Backbone) {
    var View = Backbone.View.extend({
        //el: $('body'),
        //initialize: function() {
        //    this.model.bind('reset', this.render, this);
        //},
        //render: function() {
        //    _.each(this.model.models, function(todo){
        //        //var item = new ItemView({
        //        //    model: todo
        //        //});
        //        //$(this.el).item.render().el;
        //    }, this);
        //    return this;
        //}
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