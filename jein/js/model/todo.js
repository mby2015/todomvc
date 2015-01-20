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
            value: '',
            complete: false
        },
        /**
         * 완료, 혹은 비 완료 상태를 전환한다.
         */
        toggle: function() {
            this.set('complete', !this.get('complete'));
        }
    });

    return Item;
});