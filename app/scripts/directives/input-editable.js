'use strict';

/**
 * @ngdoc directive
 * @name sirstFrontendApp.directive:inputEditable
 * @description
 * # inputEditable
 */
angular.module('sirstFrontendApp')
.directive('inputEditable', function () {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var spnEditable = angular.element('<span class="glyphicon glyphicon-edit"></span>');
            element.append(spnEditable);
            spnEditable.hide();
            element.on('mouseover', function(event) {
                spnEditable.show();
            });
            element.on('mouseout', function(event) {
                spnEditable.hide();
            });
        }
    };
});
