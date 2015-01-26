define([
    'underscore',
    'backbone',
], function(
    _,
    Backbone
    ) {

    /**
     * Todo item 의 모델
     * @cunstructor
     */
    var Item = Backbone.Model.extend(/** @lends Item.prototype */{
        defaults: {
            name: 'noName'
        }
    });

    return Item;
});