'use strict';

describe('Controller: ReguladoresViewCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var ReguladoresViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReguladoresViewCtrl = $controller('ReguladoresViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReguladoresViewCtrl.awesomeThings.length).toBe(3);
  });
});
