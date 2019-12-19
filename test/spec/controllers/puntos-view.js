'use strict';

describe('Controller: PuntosViewCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var PuntosViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PuntosViewCtrl = $controller('PuntosViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PuntosViewCtrl.awesomeThings.length).toBe(3);
  });
});
