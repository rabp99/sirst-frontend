'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.crucesService
 * @description
 * # crucesService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('crucesService', function () {
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
