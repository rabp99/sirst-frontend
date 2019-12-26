'use strict';

describe('Service: puntosService', function () {

  // load the service's module
  beforeEach(module('sirstFrontendApp'));

  // instantiate service
  var puntosService;
  beforeEach(inject(function (_puntosService_) {
    puntosService = _puntosService_;
  }));

  it('should do something', function () {
    expect(!!puntosService).toBe(true);
  });

});
