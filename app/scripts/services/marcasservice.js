'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.marcasService
 * @description
 * # marcasService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('marcasService', function () {
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
