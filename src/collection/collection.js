define(['underscore', 'backbone', 'model/model'], function(_, Backbone, model) {
    var Items = Backbone.Collection.extend({
        model: model
    });
    return Items;
});