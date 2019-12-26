'use strict';

describe('Service: marcasService', function () {

  // load the service's module
  beforeEach(module('sirstFrontendApp'));

  // instantiate service
  var marcasService;
  beforeEach(inject(function (_marcasService_) {
    marcasService = _marcasService_;
  }));

  it('should do something', function () {
    expect(!!marcasService).toBe(true);
  });

});
