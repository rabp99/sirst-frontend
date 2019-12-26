'use strict';

describe('Service: enlacesService', function () {

  // load the service's module
  beforeEach(module('sirstFrontendApp'));

  // instantiate service
  var enlacesService;
  beforeEach(inject(function (_enlacesService_) {
    enlacesService = _enlacesService_;
  }));

  it('should do something', function () {
    expect(!!enlacesService).toBe(true);
  });

});
