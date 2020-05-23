'use strict';

/**
 * @ngdoc overview
 * @name sirstFrontendApp
 * @description
 * # sirstFrontendApp
 *
 * Main module of the application.
 */
angular
.module('sirstFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'esri.map',
    'scrollable-table'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };

    var marcasState = {
        name: 'marcas',
        url: '/marcas',
        templateUrl: 'views/Marcas/marcas.html',
        controller: 'MarcasCtrl',
        controllerAs: 'MarcasCtrl',
    };
    
    var mapapruebaState = {
        name: 'mapaprueba',
        url: '/mapaprueba',
        templateUrl: 'views/mapaprueba.html',
        controller: 'MapapruebaCtrl',
        controllerAs: 'MapapruebaCtrl',
    };
    $stateProvider.state(mainState);
    $stateProvider.state(marcasState);
    $stateProvider.state(mapapruebaState);
    $urlRouterProvider.when('', '/');   
});;
