'use strict';

describe('Service: modelosService', function () {

  // load the service's module
  beforeEach(module('sirstFrontendApp'));

  // instantiate service
  var modelosService;
  beforeEach(inject(function (_modelosService_) {
    modelosService = _modelosService_;
  }));

  it('should do something', function () {
    expect(!!modelosService).toBe(true);
  });

});
