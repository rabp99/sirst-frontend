'use strict';

describe('Directive: inputEditable', function () {

  // load the directive's module
  beforeEach(module('sirstFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<input-editable></input-editable>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inputEditable directive');
  }));
});
