'use strict';

/**
 * @ngdoc function
 * @name sirstFrontendApp.controller:MarcasAddCtrl
 * @description
 * # MarcasAddCtrl
 * Controller of the sirstFrontendApp
 */
angular.module('sirstFrontendApp')
.controller('MarcasAddCtrl', function ($scope, $uibModalInstance, $utilsViewService, 
    marcasService) {

    $scope.init = function() {
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