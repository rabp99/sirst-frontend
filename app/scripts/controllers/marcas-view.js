'use strict';

/**
 * @ngdoc function
 * @name sirstFrontendApp.controller:MarcasViewCtrl
 * @description
 * # MarcasViewCtrl
 * Controller of the sirstFrontendApp
 */
angular.module('sirstFrontendApp')
.controller('MarcasViewCtrl', function ($scope, $uibModalInstance, 
    $utilsViewService, marcasService, marca) {

    $scope.init = function() {
        $scope.marca = angular.copy(marca);
    };
    
    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveMarca = function(marca) {
        $utilsViewService.disable('.btn-submit');
        
        marcasService.save(marca, function (data) {
            $uibModalInstance.close(data);
        }, function (err) {
            $uibModalInstance.close(err.data);
        });
    };
    
    $scope.init();
});