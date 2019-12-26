'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.tSwitchesService
 * @description
 * # tSwitchesService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('tSwitchesService', function () {
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
