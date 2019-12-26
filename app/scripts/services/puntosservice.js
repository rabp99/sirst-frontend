'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.puntosService
 * @description
 * # puntosService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('puntosService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
