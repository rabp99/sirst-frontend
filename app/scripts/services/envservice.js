'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.envService
 * @description
 * # envService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
.factory('envService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost/sirst-backend/api/';
                case 'sirst.robertobocanegra.com':
                    return 'http://sirst.robertobocanegra.com/api/';
            }
        }
    };
});