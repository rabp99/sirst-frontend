'use strict';

describe('Controller: SwitchesCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var SwitchesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SwitchesCtrl = $controller('SwitchesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SwitchesCtrl.awesomeThings.length).toBe(3);
  });
});
