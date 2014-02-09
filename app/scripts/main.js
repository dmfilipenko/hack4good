/*global require*/
'use strict';

require.config({

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        hbs: '../bower_components/require-handlebars-plugin/hbs',
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore'
    },
    hbs: { // optional
        helpers: true,            // default: true
        i18n: false,              // default: false
        templateExtension: 'hbs' // default: 'hbs'
    }
});

require([
    'backbone',
    'routes/application'
], function(Backbone, AppRoute) {
    new AppRoute()
    Backbone.history.start();
});
