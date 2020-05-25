'use strict';

/**
 * @ngdoc function
 * @name sirstFrontendApp.controller:MarcasCtrl
 * @description
 * # MarcasCtrl
 * Controller of the sirstFrontendApp
 */
angular.module('sirstFrontendApp')
.controller('MarcasCtrl', function ($scope, marcasService, $uibModal) {
    $scope.init = function() {
        $scope.table = {
            loading: true,
            count: 0,
            page: 1,
            search: {
                descripcion: ""
            },
            pagination: {
                itemsPerPage: 10,
                totalItems: 0
            },
            marcasWs: {
                wId: '10%',
                wDescripcion: '80%',
                wAcciones: '14%'
            },
            onChangeItemsPerPage: function() {
                $scope.table.page = 1;
                $scope.getMarcas();
            },
            pageChanged: function() {
                $scope.getMarcas();
            }
        };
        $scope.getMarcas();
    };
    
    $scope.getMarcas = function() {
        $scope.marcas = [];
        $scope.table.loading = true;
        marcasService.get({
            descripcion: $scope.table.search.descripcion,
            
            page: $scope.table.page,
            itemsPerPage: $scope.table.pagination.itemsPerPage
        }, function(data) {
            $scope.marcas = data.marcas;
            $scope.table.loading = false;
            $scope.table.count = data.count;
            $scope.table.pagination = data.pagination;
        });
    };
    
    $scope.$watch('table.search.descripcion', function(oldValue, newValue) {
        $scope.table.page = 1;
        $scope.getMarcas();
    });
    
    $scope.showMarcasAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/Marcas/marcas-add.html',
            controller: 'MarcasAddCtrl',
            backdrop: false
        });

        modalInstanceAdd.result.then(function (data) {
            $scope.message = data;
            $scope.getMarcas();
        });
    };
    
    $scope.showMarcasView = function(marca) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/Marcas/marcas-view.html',
            controller: 'MarcasViewCtrl',
            backdrop: false,
            resolve: {
                marca: function() {
                    return marca;
                } 
            }
        });

        modalInstanceEdit.result.then(function (data) {
            $scope.message = data;
            $scope.init();
        });
    };
    
    $scope.init();
});