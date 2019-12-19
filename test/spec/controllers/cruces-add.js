'use strict';

describe('Controller: CrucesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var CrucesAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrucesAddCtrl = $controller('CrucesAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrucesAddCtrl.awesomeThings.length).toBe(3);
  });
});
