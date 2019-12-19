'use strict';

describe('Controller: AntenasCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var AntenasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AntenasCtrl = $controller('AntenasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AntenasCtrl.awesomeThings.length).toBe(3);
  });
});
