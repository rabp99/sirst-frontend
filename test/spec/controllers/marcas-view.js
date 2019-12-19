'use strict';

describe('Controller: MarcasViewCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var MarcasViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MarcasViewCtrl = $controller('MarcasViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MarcasViewCtrl.awesomeThings.length).toBe(3);
  });
});
