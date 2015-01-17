define([
    '_',
    'Backbone',
], function(_, Backbone) {

    var Item = Backbone.Model.extend({
        defaults: {
            value: '',
            complete: false
        },
        toggle: function() {
            this.set('complete', !this.get('complete'));
        }
    });

    return Item;
});