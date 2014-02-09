/*global define*/

define([
    'jquery',
    'backbone',
    'views/main',
    'views/user'
], function($, Backbone, MainView, UserView) {
    'use strict';

    var ApplicationRouter = Backbone.Router.extend({
        routes: {
            "user": "user",
            "*action": "defaultRoute"
        },

        defaultRoute: function() {
            console.log('default route')
            new MainView()
        },

        user: function() {
            new UserView()
            console.log("user")
        },

        help: function() {
            console.log('help')
        }

    });

    return ApplicationRouter;
});
