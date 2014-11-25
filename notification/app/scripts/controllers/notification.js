'use strict';

angular.module('br.notification',[])

    .service('Notification', function() {
        this.show = function() {
            //show loading icon
            $('#notification').fadeIn();
        };

        this.hide = function() {
            //hide loading icon
            $('#notification').fadeOut();
        };
    })
