'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.reguladoresService
 * @description
 * # reguladoresService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('reguladoresService', function () {
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
