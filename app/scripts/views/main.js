/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!templates/main'
], function($, _, Backbone, AppTemplate) {
    'use strict';

    var ApplicationView = Backbone.View.extend({
        template: AppTemplate(),
        el: '.container',
        initialize: function() {
            this.render();
            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ':' + new Date().getSeconds())
        },
        render: function() {
            this._clear();
            this.$el.append(this.template);
        },
        _clear: function() {
            this.$el.html('')
        }
    });

    return ApplicationView;
});
