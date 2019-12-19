'use strict';

describe('Controller: SwitchesViewCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var SwitchesViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SwitchesViewCtrl = $controller('SwitchesViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SwitchesViewCtrl.awesomeThings.length).toBe(3);
  });
});
