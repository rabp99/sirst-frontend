'use strict';

describe('Controller: AntenasAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var AntenasAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AntenasAddCtrl = $controller('AntenasAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AntenasAddCtrl.awesomeThings.length).toBe(3);
  });
});
