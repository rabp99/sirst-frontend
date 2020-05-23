'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.marcasService
 * @description
 * # marcasService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
.factory('marcasService', function ($resource, envService) {
    return $resource(envService.getHost() + 'marcas/:id.json', {});
});