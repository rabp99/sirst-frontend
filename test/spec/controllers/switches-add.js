'use strict';

describe('Controller: SwitchesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var SwitchesAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SwitchesAddCtrl = $controller('SwitchesAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SwitchesAddCtrl.awesomeThings.length).toBe(3);
  });
});
