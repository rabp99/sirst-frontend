'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.enlacesService
 * @description
 * # enlacesService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('enlacesService', function () {
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
