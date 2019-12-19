'use strict';

describe('Controller: EnlacesViewCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var EnlacesViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnlacesViewCtrl = $controller('EnlacesViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EnlacesViewCtrl.awesomeThings.length).toBe(3);
  });
});
