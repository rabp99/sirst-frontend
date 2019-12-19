'use strict';

describe('Controller: CentralesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var CentralesAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CentralesAddCtrl = $controller('CentralesAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CentralesAddCtrl.awesomeThings.length).toBe(3);
  });
});
