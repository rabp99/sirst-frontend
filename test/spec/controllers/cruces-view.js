'use strict';

describe('Controller: CrucesViewCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var CrucesViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrucesViewCtrl = $controller('CrucesViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrucesViewCtrl.awesomeThings.length).toBe(3);
  });
});
