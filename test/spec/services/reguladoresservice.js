'use strict';

describe('Service: reguladoresService', function () {

  // load the service's module
  beforeEach(module('sirstFrontendApp'));

  // instantiate service
  var reguladoresService;
  beforeEach(inject(function (_reguladoresService_) {
    reguladoresService = _reguladoresService_;
  }));

  it('should do something', function () {
    expect(!!reguladoresService).toBe(true);
  });

});
