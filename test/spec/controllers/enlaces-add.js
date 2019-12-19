'use strict';

describe('Controller: EnlacesAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var EnlacesAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnlacesAddCtrl = $controller('EnlacesAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EnlacesAddCtrl.awesomeThings.length).toBe(3);
  });
});
