'use strict';

describe('Controller: CentralesViewCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var CentralesViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CentralesViewCtrl = $controller('CentralesViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CentralesViewCtrl.awesomeThings.length).toBe(3);
  });
});
