var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/',

    paths: {
        'jquery': '../bower/jquery/dist/jquery',
        'underscore': '../bower/underscore/underscore',
        'backbone': '../bower/backbone/backbone-min',
        'template': '../src/template/todo',
        'text': '../bower/requirejs/text/text'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            //loads dependencies first
            deps: ['jquery', 'underscore'],
            //custom export name, this would be lowercase otherwise
            exports: 'Backbone'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});