'use strict';

describe('Controller: CentralesCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var CentralesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CentralesCtrl = $controller('CentralesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CentralesCtrl.awesomeThings.length).toBe(3);
  });
});
