'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.antenasService
 * @description
 * # antenasService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('antenasService', function () {
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
