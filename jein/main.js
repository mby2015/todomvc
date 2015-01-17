requirejs.config({
    baseUrl: '/todomvc/jein/js',
    paths: {
        _: '../lib/underscore/underscore',
        Backbone: '../lib/backbone/backbone',
        jquery: '../lib/jquery/jquery'
    },
    shim: {
        '$': {
            exports: 'jquery'
        }
    }
});