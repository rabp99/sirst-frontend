'use strict';

describe('Controller: PuntosCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var PuntosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PuntosCtrl = $controller('PuntosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PuntosCtrl.awesomeThings.length).toBe(3);
  });
});
