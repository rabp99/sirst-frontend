'use strict';

describe('Controller: EnlacesCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var EnlacesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnlacesCtrl = $controller('EnlacesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EnlacesCtrl.awesomeThings.length).toBe(3);
  });
});
