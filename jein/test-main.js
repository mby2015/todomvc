var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/test\.js$/.test(file)) {
            tests.push(file);
        }
    }
}
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/js',

    paths: {
        _: '../lib/underscore/underscore',
        Backbone: '../lib/backbone/backbone',
        jquery: '../lib/jquery/jquery'
    },
    shim: {
        '$': {
            exports: 'jquery'
        },
        'underscore': {
            exports: '_'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});