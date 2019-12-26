'use strict';

describe('Service: antenasService', function () {

  // load the service's module
  beforeEach(module('sirstFrontendApp'));

  // instantiate service
  var antenasService;
  beforeEach(inject(function (_antenasService_) {
    antenasService = _antenasService_;
  }));

  it('should do something', function () {
    expect(!!antenasService).toBe(true);
  });

});
