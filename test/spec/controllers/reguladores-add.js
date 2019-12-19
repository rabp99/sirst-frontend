'use strict';

describe('Controller: ReguladoresAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var ReguladoresAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReguladoresAddCtrl = $controller('ReguladoresAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReguladoresAddCtrl.awesomeThings.length).toBe(3);
  });
});
