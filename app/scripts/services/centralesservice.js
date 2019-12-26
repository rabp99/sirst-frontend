'use strict';

/**
 * @ngdoc service
 * @name sirstFrontendApp.centralesService
 * @description
 * # centralesService
 * Factory in the sirstFrontendApp.
 */
angular.module('sirstFrontendApp')
  .factory('centralesService', function () {
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
