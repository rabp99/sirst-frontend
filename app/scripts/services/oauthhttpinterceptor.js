'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.oauthHttpInterceptor
 * @description
 * # oauthHttpInterceptor
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('oauthHttpInterceptor', function ($cookies) {
    return {
        request: function (config) {
            config.headers.Authorization = 'Bearer ' + $cookies.get('sirst-token');
            return config;
        }
    };
});