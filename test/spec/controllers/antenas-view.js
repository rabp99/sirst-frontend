'use strict';

describe('Controller: AntenasViewCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var AntenasViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AntenasViewCtrl = $controller('AntenasViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AntenasViewCtrl.awesomeThings.length).toBe(3);
  });
});
