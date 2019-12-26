'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.$utilsViewService
 * @description
 * # $utilsViewService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
.factory('$utilsViewService', function () {
    return {
        enable: function(id) {
            $(id).removeClass('disabled');
            $(id).prop('disabled', false);
        },
        disable: function(id) {
            $(id).addClass('disabled');
            $(id).prop('disabled', true);
        }
    };
});