'use strict';

describe('Controller: ModelosAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var ModelosAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModelosAddCtrl = $controller('ModelosAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModelosAddCtrl.awesomeThings.length).toBe(3);
  });
});
