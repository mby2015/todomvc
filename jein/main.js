requirejs.config({
    baseUrl: '/todomvc/jein/js',

    paths: {
        underscore: '../lib/underscore/underscore',
        backbone: '../lib/backbone/backbone',
        jquery: '../lib/jquery/jquery'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ["underscore", "jquery"],
            exports: 'Backbone'
        }
    }
});