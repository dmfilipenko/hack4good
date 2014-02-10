/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!templates/user2'
], function($, _, Backbone,  UserTemplate) {
    'use strict';

    var ApplicationView = Backbone.View.extend({
        template: UserTemplate(),
        el: '.container',
        initialize: function() {
            this.render();
            this.addTags();
            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ':' + new Date().getSeconds())
        },

        render: function() {
            this._clear();
            this.$el.append(this.template);
        },

        _clear: function() {
            this.$el.html('')
        },
        addTags: function(){
            $('.user-profile-header-tags-input').on('keypress',function(e){
                if (e.keyCode == 13) {
                    $('.user-profile-info-interests-container').find('ul').append('<li>'+ e.target.value+'</li>');
                    $(e.target).val('');
                }
            });
        }
    });

    return ApplicationView;
});
