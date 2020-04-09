'use strict';

/**
 * @ngdoc function
 * @name sirstFrontendApp.controller:MapapruebaCtrl
 * @description
 * # MapapruebaCtrl
 * Controller of the sirstFrontendApp
 */
angular.module('sirstFrontendApp')
.controller('MapapruebaCtrl', function ($scope, esriLoader) {
    esriLoader.require(['esri/Map'], function(Map) {
        $scope.map = new Map({
            basemap: 'streets'
        });
    });
});