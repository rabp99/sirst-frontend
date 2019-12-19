'use strict';

describe('Controller: ReguladoresCtrl', function () {

  // load the controller's module
  beforeEach(module('sirstFrontendApp'));

  var ReguladoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReguladoresCtrl = $controller('ReguladoresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReguladoresCtrl.awesomeThings.length).toBe(3);
  });
});
