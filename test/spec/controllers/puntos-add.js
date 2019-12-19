'use strict';

describe('Controller: PuntosAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var PuntosAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PuntosAddCtrl = $controller('PuntosAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PuntosAddCtrl.awesomeThings.length).toBe(3);
  });
});
