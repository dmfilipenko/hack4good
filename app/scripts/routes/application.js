/*global define*/

define([
    'jquery',
    'backbone',
    'views/main',
    'views/user',
    'views/other_users',
    'views/allusers',
    'views/user2',
    'views/mail'
], function($, Backbone, MainView, UserView, OtherUsersView, AllUserView, User2View, Mail) {
    'use strict';

    var ApplicationRouter = Backbone.Router.extend({
        routes: {
            "user": "user",
            "other_users": "other_users",
            "user2": "user2",
            "allusers": "allusers",
            "mail":"mail",
            "*action": "defaultRoute"
        },

        defaultRoute: function() {
            console.log('default route')
            new MainView()
        },

        allusers: function() {
            new AllUserView()
        },

        other_users: function() {
            new OtherUsersView()
        },

        user: function() {
            console.log('default route')
            new UserView()
        },

        user2: function() {
            new User2View()
        },

        mail: function() {
            new Mail()
        },

        help: function() {
            console.log('help')
        }

    });

    return ApplicationRouter;
});
