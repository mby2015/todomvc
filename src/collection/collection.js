var app = app || {};
(function() {
    'use strict';
    app.Collection = Backbone.Collection.extend({
        model: app.Todo
    });
})();


