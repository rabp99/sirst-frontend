'use strict';

describe('Controller: MapapruebaCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var MapapruebaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapapruebaCtrl = $controller('MapapruebaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MapapruebaCtrl.awesomeThings.length).toBe(3);
  });
});
